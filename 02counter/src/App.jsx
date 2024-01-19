import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]= useState(15)

  const addValue = ()=>{
    if(counter<20)
    setcounter(counter+1)
  }

  const removeValue =() =>{
    if(counter>0)
    setcounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
