import './Navigation.css'
import React from 'react'
import Button from '../Button/Button'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <nav className="Navigation">
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </nav>
  )
}
