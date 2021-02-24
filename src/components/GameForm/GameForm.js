import './GameForm.css'

import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player names"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <Button>Create game</Button>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}
