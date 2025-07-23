import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Expense from './components/Expense'
import Tracker from './components/Tracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Expense/>
    </>
  )
}

export default App
