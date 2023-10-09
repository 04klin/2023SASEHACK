import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, collection, setDoc, doc} from "firebase/firestore";
import React, { useState } from 'react';

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const auth = getAuth();
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log('User signed up: ', user);
        // Update the user's display name
        updateProfile(user, {
          displayName: displayName
        }).then(() => {
          console.log('Display name updated successfully!');
          // Add data to Firestore
          addData(user.uid);
        }).catch((error) => {
          console.log('Error updating display name: ', error);
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error code: ', errorCode);
        console.log('Error message: ', errorMessage);
      });
  };

  async function addData(userId) {
    try {
      await setDoc(doc(db, "users", email), {
        uid: userId,
        displayName: displayName,
        email: email,
        points: 0
      });
      console.log('User data added to Firestore');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
