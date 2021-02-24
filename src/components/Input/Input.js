import './Input.css'
import React from 'react'

export default function Input({ labelText, placeholder, name }) {
  return (
    <label className="Input">
      {labelText}
      <input name={name} placeholder={placeholder} type="text" />
    </label>
  )
}
