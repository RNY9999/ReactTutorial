import React from 'react';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
// import { RadioButtonCheckedOutlined } from '@mui/icons-material';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

  return (
    <>
        {/* <Button variant="text">Text</Button> */}
        <Button variant="contained" onClick={signInWithGoogle}>グーグルでログインする</Button>
        {/* <Button variant="outlined">Outlined</Button> */}
    </>
  )
}

export default SignIn