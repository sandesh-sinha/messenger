import React, { useEffect, forwardRef } from 'react';
import './App.css';
import {IconButton, Button, FormControl, Input, InputLabel, FormHelperText} from '@material-ui/core'
import Message from './Message.js'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'

function App() {
  const [input, setInput] = React.useState('');
  const [messages,setMessages] = React.useState([]);
  const [username, setUserName] = React.useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc =>({ id:doc.id, message : doc.data()})))
    });
  }, []);

  useEffect(() => {
    setUserName(prompt('Enter your name'));
  }, [])

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message" value = {input} onChange={event => setInput(event.target.value)}/>        
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" onClick={sendMessage} type='submit' >
          <SendIcon />
        </IconButton>
      </FormControl> 
      </form>
      <FlipMove>        
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
