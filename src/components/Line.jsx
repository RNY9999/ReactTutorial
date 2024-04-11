import React, { useEffect, useState } from 'react'
import SignOut from './SignOut';
import SendMessage from './SendMessage.jsx';
import { db } from "../firebase.js";
import "../css/line.css";

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
    <div className='main-area'>
        <div className='main-content'>
            {console.log(messages)}
            <SignOut />
            <div className='messages'>
                {messages.map(({id, text, photoURL, uid}) => {
                    return (
                        <div key={id}>
                            <img className='user-icon' src={photoURL} alt="" />
                            {/* <div>{uid}</div> */}
                            <p>{text}</p>
                        </div>
                    );
                })}
            </div>
            <SendMessage />
        </div>
    </div>
  )
}

export default Line