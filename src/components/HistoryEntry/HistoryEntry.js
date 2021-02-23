import './HistoryEntry.css'
import React from 'react'

//{players.map(player => (
//  <li key={player.id}>
//  {player.name} {player.score} )

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      {nameOfGame}
      <ul>
        {players.map(({ name, score }) => (
          <li key={name}>
            {' '}
            {name}, {score}{' '}
          </li>
        ))}
      </ul>
    </section>
  )
}
