import './Navigation.css'
import React from 'react'

export default function Navigation({ pages, activeIndex, onNavigate }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          disabled={index === activeIndex}
          onClick={() => onNavigate(index)}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
