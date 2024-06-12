import { useState, useCallback, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLangth] = useState(8);
  const [nummber, setNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState('');

  const passwoedRef = useRef(null)

  //Logic Part
  const generatorPassword = useCallback(() => {
    let pass = ''
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(nummber) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_+"

    for(let i =1 ; i< length; i++){
      const char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, nummber, charAllow])

  useEffect(()=> {
    generatorPassword()
  },[length, nummber, charAllow] )

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password)
    passwoedRef.current?.select()
  }

//Styling Part 
  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg w-full overflow-hidden mb-4 '>
        <input 
        type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwoedRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLangth(e.target.value)}
          name=''
          id=''
          />
          <label htmlFor="length">Length:{length}  </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={Number}
          onChange={() => {
            setNumber((prev) => !prev )
          }}
          name="" 
          id="" 
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={charAllow}
          onChange={() => {
            setCharAllow((prev) => !prev )
          }}
          name="" 
          id="" 
          />
          <label htmlFor="charInput">Character</label>
        </div>

      </div>

    </div>
  )
}


export default App
