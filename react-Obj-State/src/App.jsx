import './App.css'
import { sum } from './helper.js'
import Lottery from './Lottery.jsx'
import InputValue from './InputValue.jsx'
import MultipleInput from './MultipleInput.jsx'
import CommentForm from './CommentForm.jsx'
import CounterUseEffect from './CounterUseEffect.jsx'
import Joker from './Joker.jsx'

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15
    return ticket[0] === 0;
  }

  return (
    <>
      <Joker/>
    </>
  )
}

export default App
