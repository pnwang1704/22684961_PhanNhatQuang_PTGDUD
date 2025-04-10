import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab01 from './components/Lab1'
import Lab02 from './components/Lab02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Lab1</h1>
      <Lab01/>
      <h1>Lab2</h1>
      <Lab02/>
    </>
  )
}

export default App
