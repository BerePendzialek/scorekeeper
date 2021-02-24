import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <StyledLabel>
      {labelText}
      <StyledInput name={name} placeholder={placeholder} />
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: grid;
  gap: 4px;
`
const StyledInput = styled.input`
  border: 2px solid #bbb;
`
