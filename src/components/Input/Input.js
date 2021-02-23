import './Input.css'
import React from 'react'

export default function Input({ labelText, placeholderText }) {
  return (
    <label>
      {labelText}
      <br />
      <input type="text" name="player" placeholder={placeholderText} />
    </label>
  )
}
