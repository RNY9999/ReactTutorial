import React from 'react';
import { auth } from "../firebase.js";
// import Button from '@mui/material/Button';
import '../css/signOut.css';

const SignOut = () => {
  return (
    <div className='chat-header'>
        <div className='chat-header__button' onClick={() => auth.signOut()}>サインアウトする</div>
    </div>
  )
}

export default SignOut