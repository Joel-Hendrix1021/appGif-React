
import './App.css';
import FormGifs from './components/FormGifs';
import Gifs from './components/Gifs';


// API_KEY=fN8MEkT7XYCyvrBxosHzU5p2qaXzNJj0

function App() {
 
  return (
    <div className="App">
       <h1>Gifi<span id="title">App</span></h1>
       <FormGifs />
       <Gifs keyword='panda'/>
    </div>
  );
}

export default App;
