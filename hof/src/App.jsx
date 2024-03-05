import { useState } from 'react'
import React from 'react';
import HigherOrderComponent from './components/HigherOrderComponent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <HigherOrderComponent />
    </div>
  )
}

export default App
