import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Acordeon from './components/Acordeon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Acordeon/>
    </>
  )
}

export default App
