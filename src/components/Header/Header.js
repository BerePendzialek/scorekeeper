import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ text }) {
  return <AHeader> {text}</AHeader>
}

const AHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 48px;
  padding: 12px;
`
