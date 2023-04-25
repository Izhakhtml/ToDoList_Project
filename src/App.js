import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import { MissionContext } from './context/TaxtContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MissionContext>
          <Tasks />
        </MissionContext>
      </header>
    </div>
  );
}

export default App;
