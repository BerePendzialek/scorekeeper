import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './components/Button/Button'
import GameForm from './components/GameForm/GameForm'
import Header from './components/Header/Header'
import HistoryEntry from './components/HistoryEntry/HistoryEntry'
import Navigation from './components/Navigation/Navigation'
import Player from './components/Player/Player'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('play')
  const [nameOfGame, setNameOfGame] = useState('')

  return (
    <AppLayout>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}
      {currentPage === 'game' && (
        <div>
          <Header> {nameOfGame}</Header>
          {players.map(({ name, score }, index) => (
            <Player
              key={name}
              name={name}
              score={score}
              onPlus={() => handlePlus(index)}
              onMinus={() => handleMinus(index)}
            />
          ))}
          <Button onClick={resetScores}>Reset scores</Button>
          <Button onClick={() => console.log('end game')}>End game</Button>
        </div>
      )}
      {currentPage === 'history' && (
        <div>
          <HistoryEntry
            nameOfGame="Carcassonne"
            players={[
              { name: 'John Doe', score: '20' },
              { name: 'Jane Doe', score: '30' },
            ]}
          />
        </div>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

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
