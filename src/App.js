import './App.css';
import {findSearch} from './services/search';

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
      </header> 
    </div>
  );
}

export default App;
