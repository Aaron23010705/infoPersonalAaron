import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aaron from './components/Aaron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Aaron
    nombre={'Aarón Edgardo García Romero'}
    edad={18}
    especialidad={"Software"}
    dirección={"Mexicanos"}
    código = {"20230406"}
    
    
    
    />

    </>
    
  )
}

export default App
