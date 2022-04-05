import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from "react";


const characters = [
  {name: "Roy", color: "red"}, 
  {name: "Fox", color: "green"}, 
  {name: "Ganondorf", color: "purple"},
  {name: "Sheik", color: "lightskyblue"}
]

function App() {
  const [visibile, setVisible] = useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element,index) => {
          return <Fighter name={element.name} color={element.color} setVisible={setVisible}/>}
          )
        }
      </div>
      <FighterScreen isVisible={visibile} setVisible={setVisible}/>      
    </div>
  );
}

export default App;
