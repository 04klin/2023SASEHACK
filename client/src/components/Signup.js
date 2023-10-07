import React, { useState } from 'react';
import { auth } from '../firebase';

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log('User signed up: ', user);
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
      <form className="signup-container" onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" onChange={e => setDisplayName(e.target.value)} placeholder="Display Name" />
        <label>Email</label>
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <label>Retype Password</label>
        <input type="password" onChange={e => setRetypePassword(e.target.value)} placeholder="Retype Password" />
        <button className="authentication-button flex" type="submit">Sign Up</button>
      </form>
    </div>

    
  );
}

export default SignUp;
