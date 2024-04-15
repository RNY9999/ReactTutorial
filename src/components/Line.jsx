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
                <div className='messages__scrollArea'>
                    {messages.map(({id, text, photoURL, createdAt, uid}) => {
                        return (
                            <div className='message' key={id}>
                                <img className='message__icon' src={photoURL} alt="" />
                                <div className="message__texts chat">
                                    <div className='chat__header'>
                                        <h2 className='chat__userName'>久松蓮弥</h2>
                                        <p className='chat__timeStamp'>14:19</p>
                                    </div>
                                    <p className='chat__text'>{text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <SendMessage />
        </div>
    </div>
  )
}

export default Line