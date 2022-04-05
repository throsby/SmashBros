import './App.css';
import Fighter from './components/Fighter';

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
      <div className='fighter-screen'>
        <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png"/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo. Tortor consequat id porta nibh venenatis cras sed felis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Aliquet bibendum enim facilisis gravida neque convallis a cras. Magna sit amet purus gravida quis. At tellus at urna condimentum mattis. Integer vitae justo eget magna fermentum iaculis. Urna porttitor rhoncus dolor purus non. Nec ultrices dui sapien eget.
        </p>
      </div>
    </div>
  );
}

export default App;
