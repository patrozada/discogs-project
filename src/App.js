import './App.css';
import {findSearch} from './services/search';
import {getRandomArtist} from './services/randomArtist';

function App() {
	let term;
	const handleInputChange = (e) => {
		term = e.target.value;
	}
  return (
    <div className="App">
      <header className="App-header">
				<label htmlFor="search">type in sth to find</label>
				<input type="text" name="search" id="search" onBlur={handleInputChange}/>
				<button onClick={()=>findSearch(term)}> Go </button>
				<button onClick={getRandomArtist}> Get artist </button>
      </header> 
    </div>
  );
}

export default App;
