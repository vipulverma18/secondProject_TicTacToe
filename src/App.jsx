import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
function App() {
  

  return (<main>
    <div id='game-container'>
    <ol id='players'>
      <Players initialName="Player1" symbol="X" />
      <Players initialName="Player2" symbol="0" />
    </ol>
    <GameBoard/>
    </div></main>
    
  )
}

export default App
