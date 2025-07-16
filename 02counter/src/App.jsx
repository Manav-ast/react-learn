import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    } else {  
      setCounter(counter);
    }
  }

  const subtractValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    } else {  
      setCounter(counter);
    }
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h3>Value : {counter}</h3>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractValue}>Decrement</button>
    </>
  )
}

export default App
