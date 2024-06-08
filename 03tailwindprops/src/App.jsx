import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
    <Card username = "zaid" post="Software developer" img='https://images.pexels.com/photos/25758512/pexels-photo-25758512/free-photo-of-american-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <Card username='Talha' post='Graphic designer' img='https://images.pexels.com/photos/5702289/pexels-photo-5702289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <Card img='https://images.pexels.com/photos/3142448/pexels-photo-3142448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </>
  )
}

export default App
