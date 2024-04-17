import {signIn} from '../firebase/firebaseActions'
import React, {useState} from 'react'
import {Button} from '@mui/material'

export let user; // here to see if I can move the user identity between pages
export const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = ()=> {

        signIn(email, password)
            .then((userCredentials) => {
                //if successful
                console.log("User signed in: ", userCredentials.user);
                user = userCredentials.user;
            })
            .catch((error) =>{
                //failed to login
                console.log(error.message);
                alert(error.message);
                });
    }

    return (
        <div>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignIn} variant='contained'>Sign In</Button>
        </div>
        );
    };