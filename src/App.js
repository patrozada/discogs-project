import './App.css';
import {getRandomArtist} from './services/randomArtist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<button onClick={getRandomArtist}> Get artist </button>
      </header> 
    </div>
  );
}

export default App;
