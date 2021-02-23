import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './components/Button/Button'
import AppHeader from './components/Header/AppHeader'
import HistoryEntry from './components/HistoryEntry/HistoryEntry'
import Input from './components/Input/Input'
import Navigation from './components/Navigation/Navigation'
import Player from './components/Player/Player'
import PlayerForm from './components/PlayerForm/PlayerForm'

function App() {
  const [players, setPlayers] = useState([])

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  return (
    <AppGrid>
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}

      <Button text="Reset scores" onClick={resetScore}></Button>
      <Button text="Reset all" onClick={resetAll}></Button>

      <p>_______________</p>

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

      <p>_______________</p>

      <AppHeader text="Carcassonne" />

      <Player
        name="John Doe"
        score="20"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Player
        name="Jane Doe"
        score="30"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Button
        text="Reset scores"
        onClick={() => console.log('Reset scores')}
      ></Button>

      <Button text="End game" onClick={() => console.log('Reset all')}></Button>

      <p>_______________</p>

      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: '20' },
          { name: 'Jane Doe', score: '30' },
        ]}
      />

      <HistoryEntry
        nameOfGame="Wingspan"
        players={[
          { name: 'John Doe', score: '30' },
          { name: 'Jane Doe', score: '20' },
        ]}
      />

      <Navigation
        onNavigate={index => console.log(index)}
        activeIndex={0}
        pages={['Play', 'History']}
      />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
`
