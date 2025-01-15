import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Counter from './components/Counter'
import New from './components/New'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
  
  

  
      <Routes>
      <Route path="/new" element={<New/>}/>
        <Route path="/count" element={<Counter/>}/>
        <Route path="/log" element={<Login/>}/>
        <Route path="/sign" element={<Signup/>}/>
        <Route path="/" element={<State/>}/>
        <Route path="/api" element={<Api/>}/>
      </Routes>
      
    </>
  )
}

export default App
