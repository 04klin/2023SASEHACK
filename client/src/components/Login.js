// Sign in
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('User signed in: ', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error code: ', errorCode);
        console.log('Error message: ', errorMessage);
      });
  };

  return (
    <div className='authentication-container'>
      <form className="login-container" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="flex" type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <label>Password</label>
        <input className="flex" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className="authentication-button flex" type="submit">Sign In</button>
      </form>
    </div>
    
  );
}

export default SignIn;
