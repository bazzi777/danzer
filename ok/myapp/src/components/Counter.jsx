import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useAsyncError } from 'react-router-dom'

const Counter = () => {
  const [count, setcount] = useState(0)
  return (
    <div style={{marginTop:100}}>count is {count}<div>
      <Button onClick={()=>setcount(count-1)} variant='contained'>Del</Button>
     <Button onClick={()=>setcount(count+1)} variant='contained'>Add</Button> 
    
      </div></div>
  )
}

export default Counter