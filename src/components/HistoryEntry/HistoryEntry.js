import './HistoryEntry.css'
import React from 'react'

//{players.map(player => (
//  <li key={player.id}>
//  {player.name} {player.score} )

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      {nameOfGame}
      {players.map((player, index) => (
        <div key={index} className="HistoryEntry__player">
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </section>
  )
}
