import React, {useState, useEffect} from 'react';
import './App.css';
import Missions from './components/Missions';
import Leaderboard from './components/Leaderboard.js'
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Information from './components/Information'

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
      }
      else{
        setUser(null);
      }
    })
  })

  return (
    <BrowserRouter>
      <Navbar />
      <hr class="whiteline" />
      <Routes>

        <Route path='/' element={          
          <div className='appContainer'>
            <Missions />
            <Leaderboard/>
          </div>                 
        }/>        
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/information' element={<Information/>}/>
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
