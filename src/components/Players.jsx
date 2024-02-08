import { useState } from "react"

export default function Players({initialName,symbol}){
    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing,setIsEditing]=useState(false);
    let buttonCaption="Edit"  
    function editClickHandler()
    {
        setIsEditing((editing)=>!editing)
        
        
    }
    function handleclick(event){

    setPlayerName(event.target.value)
    }
    let editableplayerName=<span className="player-symbol">{playerName}</span>
    if (isEditing) {
        editableplayerName=<input type="text" required value={playerName} onChange={handleclick}/>
        buttonCaption="Save"
    }
    return(
        <li><span className="player">
        {editableplayerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={editClickHandler}>{buttonCaption}</button>
    </li>


    )
}