import logo from './logo.svg';
import './App.css';
import Missions from './components/Missions';
import Leaderboard from './components/Leaderboard.js'
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<div className='appContainer'>
          <Missions />
          <Leaderboard/>
        </div>}/>        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
