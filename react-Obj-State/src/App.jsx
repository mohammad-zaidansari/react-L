import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import InputValue from './InputValue.jsx'
import NewTodo from './NewTodo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewTodo/>
    </>
  )
}

export default App
