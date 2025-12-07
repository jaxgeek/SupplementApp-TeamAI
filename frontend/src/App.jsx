import React, { useEffect, useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/supplements')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  return (
    <div style={{padding:20}}>
      <h1>SupplementApp</h1>
      <ul>
        {items.map(i => (
          <li key={i.id}><strong>{i.name}</strong>: {i.description}</li>
        ))}
      </ul>
    </div>
  )
}
