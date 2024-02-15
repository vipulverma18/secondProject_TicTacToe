import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import { useState } from "react"
function App() {
  const[activePlayer,setActivePlayer]=useState("X");
  function handleSelectSquare(){
    setActivePlayer(curActivePlayer=>curActivePlayer==="X"?"0":"X")
  }
  

  return (<main>
    <div id='game-container'>
    <ol id='players' className="highlight-player">
      <Players initialName="Player1" symbol="X" isActive={activePlayer==="X"}/>
      <Players initialName="Player2" symbol="0" isActive={activePlayer==="0"}/>
    </ol>
    <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div></main>
    
  )
}

export default App
