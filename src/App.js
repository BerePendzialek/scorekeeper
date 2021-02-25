import { useState } from 'react'
import styled from 'styled-components/macro'
import CreatePage from './components/CreatePage/CreatePage'
import Navigation from './components/Navigation/Navigation'
import { v4 as uuidv4 } from 'uuid'
import GamePage from './components/GamePage/GamePage'
import HistoryPage from './components/HistoryPage/HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('create')
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])

  return (
    <AppLayout>
      {currentPage === 'create' && <CreatePage onCreateGame={createGame} />}

      {currentPage === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onPlus={handlePlus}
          onMinus={handleMinus}
          onReset={resetScores}
          onEnd={endGame}
        />
      )}
      {currentPage === 'history' && <HistoryPage history={history} />}

      {(currentPage === 'create' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4 }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('create')
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
