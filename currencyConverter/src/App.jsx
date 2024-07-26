import { useState } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import { inputBox } from './component/index'


function App() {
  const [amount, setAmount] = useState(0)
  cosnt [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from)
 const option = Object.keys(currencyInfo)

 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
 }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: 'url(https://images.pexels.com/photos/4911411/pexels-photo-4911411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>

<div className='w-full'>
  <div className='w-full max-w-md mx-auto border border-x-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
  <form onSubmit={() => {
    e.preventDefault()
    convert()
  }}>
    <div className='w-full mb-1'>
      <inputBox 
      lable="from"
      amount={amount}
      currencyOption = {option}
      onCurrencyChange = {(currency)=> setFrom(currency)}
      onAmountChange = {(amount)=> setAmount(amount)}
      selectedCurrency = {from}

      />

    </div>
  </form>
  </div>
</div>

    </div>
  )
}

export default App
