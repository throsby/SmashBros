

function SideNavigation ({isVisible, characters}) {

    return(
        <div className="side-nav" style={{display: isVisible ? "block": "none"}}>
            {characters.map((character)=>{
                return(
                    <div>
                        <p>{character.name}</p>
                    </div>
            )})}
        </div>
    )
}

export default SideNavigation;