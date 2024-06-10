import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-2  shadow-lg bg-white px-5 py-2 rounded-3xl'>
    <button
    onClick={() => setColor('red')}
    className='outline-none px-4 py-1 text-red-600 rounded-full bg-white shadow-md'
    >Red</button>
    <button
    onClick={() => setColor('green')}
    className='outline-none px-4 py-1 rounded-full bg-white text-green-600  shadow-lg'
    >Green</button>
    <button
    onClick={() => setColor('olive')}
    className='outline-none px-4 py-1 rounded-full bg-white text-amber-600  shadow-lg'
    >Olive</button>
    <button
    onClick={() => setColor('blue')}
    className='outline-none px-4 py-1 rounded-full bg-white text-blue-600  shadow-lg'
    >Blue</button>
    <button
    onClick={() => setColor('purple')}
    className='outline-none px-4 py-1 rounded-full bg-white text-purple-600  shadow-lg'
    >Purple</button>
    <button
    onClick={() => setColor('yellow')}
    className='outline-none px-4 py-1 rounded-full bg-white text-yellow-600  shadow-lg'
    >Yellow</button>
    <button
    onClick={() => setColor('gray')}
    className='outline-none px-4 py-1 rounded-full bg-white text-black  shadow-lg'
    >Reset</button>
   
    </div>
    </div>
  </div>
  )
}

export default App
