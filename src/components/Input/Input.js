import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <styledLabel>
      {labelText}
      <styledInput
        name={name}
        placeholder={placeholder}
        type="text"
      ></styledInput>
    </styledLabel>
  )
}

const styledLabel = styled.label`
  display: grid;
  gap: 4px;
`
const styledInput = styled.input`
  border: 2px solid #bbb;
`
