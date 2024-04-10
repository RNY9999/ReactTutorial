import React, { useEffect, useState } from 'react'
import SignOut from './SignOut';
import SendMessage from './SendMessage.jsx';
import { db } from "../firebase.js";

const Line = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        });
    }, [])

  return (
    <div>
        {console.log(messages)}
        <SignOut />
        <div className='messages'>
            {messages.map(({id, text, photoURL, uid}) => {
                return (
                    <div key={id}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                );
            })}
        </div>
        <SendMessage />
    </div>
  )
}

export default Line