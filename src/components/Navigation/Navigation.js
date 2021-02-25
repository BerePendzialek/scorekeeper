import React from 'react'
import Button from '../Button/Button'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <Button as={NavLink} exact to="/">
        Create
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
`
