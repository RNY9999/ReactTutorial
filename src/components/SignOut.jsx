import React from 'react';
import { auth } from "../firebase.js";
import Button from '@mui/material/Button';

const SignOut = () => {
  return (
    <div>
        <Button onClick={() => auth.signOut()}>
            サインアウトする
        </Button>
    </div>
  )
}

export default SignOut