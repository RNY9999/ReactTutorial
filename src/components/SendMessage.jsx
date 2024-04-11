import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";

// import SendIcon from '@mui/icons-material/Send';

const SendMessage = () => {
    const [message, setMessage] = useState();
    const sendMessage = (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        db.collection("messages").add({
            text: message, 
            photoURL, 
            uid,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        });

        setMessage("");
    }
  return (
    <form className='send-form' onSubmit={sendMessage}>
            <input type="text" value={message} placeholder='メッセージを入力してください' onChange={(e) => setMessage(e.target.value)}/>
            {/* <button type='submit' onChange={(e) => setMessage(e.target.value)}>
                <SendIcon/>
            </button> */}
    </form>
  )
}

export default SendMessage