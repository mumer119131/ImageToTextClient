import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar />
  )
}

export default App
