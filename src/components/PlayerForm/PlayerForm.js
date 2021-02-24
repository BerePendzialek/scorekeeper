import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <Label>
        Add player:
        <br />
        <Input name="player" placeholder="Player name" />
      </Label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`

const Input = styled.input`
  border: 1px solid #666;
`
