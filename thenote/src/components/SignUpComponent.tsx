import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@mui/material'
import {signUp} from '../firebase/firebaseActions'

export default function SignUpComponent(){

    const [email, setEmail] = useState('');
    const [password, setPassword]=  useState('');
//user created successfully
    const handleSignUp = ()=>{
      signUp(email, password)
        .then((userCredential)=>{
          console.log("New user created: ", userCredential);
        })
        .catch((error)=> {
          console.log(error.message)
        });
    };


    return (
        <>
        <form>
            <h1>Sign Up</h1>
            <TextField id="email-input"
            label="Email" 
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField id="password-input"
            label="Password"
            type="password"
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='contained' onClick={handleSignUp}>Submit</Button>
        </form>
        </>
    );
};