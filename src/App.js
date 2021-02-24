import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './components/Button/Button'
import GameForm from './components/GameForm/GameForm'
import Header from './components/Header/Header'
import HistoryEntry from './components/HistoryEntry/HistoryEntry'
import Navigation from './components/Navigation/Navigation'
import Player from './components/Player/Player'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('play')
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4 }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('play')
  }

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
          <Button onClick={endGame}>End game</Button>
        </div>
      )}
      {currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
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
const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`
