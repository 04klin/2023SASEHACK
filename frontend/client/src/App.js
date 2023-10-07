import logo from './logo.svg';
import './App.css';
import Missions from './components/Missions';
import Leaderboard from './components/Leaderboard.js'

function App() {
  return (
    <div className='appContainer'>
      <Missions />
      <Leaderboard/>
    </div>
  );
}

export default App;
