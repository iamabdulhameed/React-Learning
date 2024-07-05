import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let [msg, setMsg] = useState("")
 
  const increaseValue = () => {
    if (counter == 20) {
      setMsg(`Can't go beyond: ${counter}`)
    } else {
      setMsg("")
      counter += 1;
    }
    setCounter(counter)
  }
  const decreaseValue = () => {
    if (counter == 0) {
      setMsg(`Can't go beyond: ${counter}`)
    }
    else {
      setMsg("")
      counter -= 1;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter by Abdul Hameed</h1>
      <h2>Current Value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={decreaseValue}>Decrease Value</button>
      <h2>{msg}</h2>
    </>
  )
}

export default App
