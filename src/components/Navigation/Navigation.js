import React from 'react'
import Button from '../Button/Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <NavigationStyled>
      <Button
        isActive={currentPage === 'create'}
        onClick={() => onNavigate('create')}
      >
        Create
      </Button>
      <Button
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </Button>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
`
