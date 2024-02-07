import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
 
  return (
    <>
     <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card userName="Girl name 1"  />
      <Card userName="Girl name 2" btnText='Click here'  />
    </>
  )
}

export default App