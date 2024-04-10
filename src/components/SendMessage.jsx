import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";

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
    <form onSubmit={sendMessage}>
        <div className="sendMessage">
            <input type="text" value={message} placeholder='メッセージを入力してください' onChange={(e) => setMessage(e.target.value)}/>
        </div>
    </form>
  )
}

export default SendMessage