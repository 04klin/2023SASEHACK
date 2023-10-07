import './App.css';
import Missions from './components/Missions';
import Leaderboard from './components/Leaderboard.js'
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Information from './components/Information'

import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  
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
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/information' element={<Information/>}/>
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
