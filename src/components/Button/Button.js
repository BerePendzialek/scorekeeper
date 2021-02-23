import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ text, onClick, isReseted }) {
  return <ButtonMain onClick={onClick}>{text}</ButtonMain>
}

const ButtonMain = styled.button`
  padding: 5px;
  background: #bbb;
`
