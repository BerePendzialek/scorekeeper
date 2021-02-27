import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function HistoryEntry({
  nameOfGame,
  players,
  isNameALink = true,
}) {
  return (
    <HistoryEntryGrid>
      {isNameALink ? (
        <Link to={`/history/${nameOfGame}`}>{nameOfGame}</Link>
      ) : (
        nameOfGame
      )}
      {players.map((player, index) => (
        <HistoryEntryPlayer key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryEntryPlayer>
      ))}
    </HistoryEntryGrid>
  )
}

const HistoryEntryGrid = styled.section`
  display: grid;
  gap: 10px;
`

const HistoryEntryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
`
