import React from 'react'
import Button from '../Button/Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <NavigationStyled>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
`
