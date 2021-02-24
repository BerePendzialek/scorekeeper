import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './components/Button/Button'
import AppHeader from './components/Header/Header'
import HistoryEntry from './components/HistoryEntry/HistoryEntry'
import Input from './components/Input/Input'
import Navigation from './components/Navigation/Navigation'
import Player from './components/Player/Player'
import PlayerForm from './components/PlayerForm/PlayerForm'

export default function App() {
  const [players, setPlayers] = useState([])
  return (
    <AppLayout>
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
        // React.createElement(Player, {name, score, onPlus: () => handlePlus(index)})
      ))}
      <ButtonGrid>
        <Button onClick={resetScores}>Reset scores</Button>
        <DangerButton onClick={resetAll}>Reset all</DangerButton>
      </ButtonGrid>

      <p>_______________</p>

      <h2>Scorekeeper version 2</h2>

      <Input
        labelText="Name of the game:"
        placeholder="eg. Carcassonne"
        name="game"
      />
      <Input labelText="Player names:" placeholder="eg. John Doe, Jane Doe" />
      <Button onClick={() => console.log('Create game')}>Create game</Button>

      <Navigation onNavigate={index => console.log(index)} activeIndex={1} />

      <p>_______________</p>

      <AppHeader text="Carcassonne" />

      <Player
        name="John Doe"
        score="0"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Player
        name="Jane Doe"
        score="30"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />

      <Button onClick={resetScores}>Reset scores</Button>
      <DangerButton onClick={resetAll}>End game</DangerButton>

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

      <Navigation onNavigate={index => console.log(index)} activeIndex={0} />
    </AppLayout>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
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
}

const AppLayout = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
`
const DangerButton = styled(Button)`
  background-color: mistyrose;
  border: 1px solid red;
`
const ButtonGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`
