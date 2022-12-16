import React from 'react'

export default function Sidebaritem({ name, active, handleCick }) {
  return (
    <button className={`sidebar-item ${active ? 'active' : ''}`}onClick={handleCick }
    >
      {name}
      </button>
  )
} 
