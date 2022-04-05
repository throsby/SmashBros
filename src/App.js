import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={"Roy"} color={"red"} />
        <Fighter name={"Fox"} color={"green"} />
        <Fighter name={"Ganondorf"} color={"purple"} />
        <Fighter name={"Sheik"} color={"blue"} />
      </div>
      <FighterScreen />
      
    </div>
  );
}

export default App;
