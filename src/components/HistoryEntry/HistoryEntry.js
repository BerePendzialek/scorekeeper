import React from 'react'
import styled from 'styled-components/macro'

//{players.map(player => (
//  <li key={player.id}>
//  {player.name} {player.score} )

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntryGrid>
      {nameOfGame}
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
