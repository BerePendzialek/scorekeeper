import './App.css'
import Button from './components/Button/Button'
import Player from './components/Player/Player'
import PlayerForm from './components/PlayerForm/PlayerForm'

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={name => console.log(name)} />

      <Player
        name="John Doe"
        score="10"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Player
        name="Jane Doe"
        score="20"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Button
        text="Reset scores"
        onClick={() => console.log('Reset scores')}
      ></Button>
      <Button
        text="Reset all"
        onClick={() => console.log('Reset all')}
      ></Button>
    </div>
  )
}

export default App
