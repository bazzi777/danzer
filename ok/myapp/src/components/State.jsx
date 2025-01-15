import { TextField } from '@mui/material'
import React, { useState } from 'react'
const State = () => {
  var [name,setname]=useState("Dude")
  var handleinput=(e)=>{
   setname(e.target.value) 
  }
  return (
    <div><h1>HEY THERE...</h1>  
    <h2>Welcome {name}</h2> 
    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleinput}/> 
    </div>
  )
}

export default State