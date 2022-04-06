import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import SideNavigation from './components/SideNavigation';
import { useState } from "react";


const characters = [
  {name: "Roy", color: "red"}, 
  {name: "Fox", color: "green"}, 
  {name: "Ganondorf", color: "purple"},
  {name: "Sheik", color: "lightskyblue"},
  {name: "Cloud", color: "mediumseagreen"},
  {name: "Zelda", color: "lightpink"},
  {name: "Sora", color: "lightyellow"},
  {name: "Kirby", color: "pink"}
]

function App() {
  const [visibile, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element) => {
          return <Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />
        })
        }
      </div>
      <FighterScreen isVisible={visibile} setVisible={setVisible} selectedCharacter={selectedCharacter} />
      <SideNavigation isVisible={visibile} characters={characters} />
    </div>
  );
}

export default App;
