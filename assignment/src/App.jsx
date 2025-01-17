import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View3 from './View3'
import Add2 from './Add2'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br></br><br></br><br></br><br></br>
 <h1>WAVIN FREAKZ</h1>
 <i>Move your body to shine</i><br></br><br></br>
     <img src="https://i.pinimg.com/originals/78/3e/ed/783eedce88f5e97e7f24418a9979c417.jpg" height="600px" width="400px"/>
      
 
      <Navbar></Navbar>
      
     
     
        
      <Routes>
       
        <Route path="/add" element={<Add2/>}/>
        <Route path="/ss" element={<View3/>}/>
          
       
       
      </Routes>


    </>
  )

}

export default App
