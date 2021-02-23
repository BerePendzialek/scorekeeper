import './App.css'
import Button from './components/Button/Button'
import AppHeader from './components/Header/AppHeader'
import HistoryEntry from './components/HistoryEntry/HistoryEntry'
import Input from './components/Input/Input'
import Navigation from './components/Navigation/Navigation'
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

      <h2>Scorekeeper version 2</h2>

      <Input labelText="Name of the game:" placeholderText="eg. Carcassonne" />
      <Input
        labelText="Player names:"
        placeholderText="eg. John Doe, Jane Doe"
      />
      <Button
        text="Create game"
        onClick={() => console.log('Create game')}
      ></Button>

      <Navigation
        onNavigate={index => console.log(index)}
        activeIndex={1}
        pages={['Play', 'History']}
      />

      <AppHeader text="Carcassonne" />

      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: '20' },
          { name: 'Jane Doe', score: '30' },
        ]}
      />
    </div>
  )
}

export default App
