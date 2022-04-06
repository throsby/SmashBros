

const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
    <div 
    onClick={() => {setVisible(false)}}
    className='fighter-screen' style={{display: isVisible ? "block": "none"}}>
        <h2>{selectedCharacter.name}</h2>
        <img width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`}/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo. Tortor consequat id porta nibh venenatis cras sed felis.
        </p>
      </div>
      )
}

export default FighterScreen;