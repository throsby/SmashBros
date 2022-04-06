

const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
    <div 
    onClick={() => {return null}}
    className='fighter-screen' style={{display: isVisible ? "block": "none"}}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2  className="name-fg">{selectedCharacter.name}</h2>
        <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`}/>
        {/* <p className="fighter-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo. Tortor consequat id porta nibh venenatis cras sed felis.
        </p> */}
      </div>
      )
}

export default FighterScreen;