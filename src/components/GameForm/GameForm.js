import './GameForm.css'

import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input labelText="Name of the game:" placeholderText="eg. Carcassonne" />
      <Input
        labelText="Player names:"
        placeholderText="eg. John Doe, Jane Doe"
      />
      <Button text="Create game" />
    </form>
  )
  function handleSubmit() {}
}
