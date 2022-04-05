import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from "react";

function App() {
  const [visibile, setVisible] = useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={"Roy"} color={"red"} setVisible={setVisible}/>
        <Fighter name={"Fox"} color={"green"} setVisible={setVisible}/>
        <Fighter name={"Ganondorf"} color={"purple"} setVisible={setVisible}/>
        <Fighter name={"Sheik"} color={"blue"} setVisible={setVisible}/>
      </div>
      <FighterScreen isVisible={visibile} setVisible={setVisible}/>
      
    </div>
  );
}

export default App;
