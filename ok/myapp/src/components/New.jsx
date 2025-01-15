import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

const New = () => {
    const[name,setname]=useState("")
   

  return (
    <div><h2>Welcome {name}</h2> 
    <Stack spacing={2}>
    <Button onClick={()=>setname ('Nee')} variant="contained" color="success">Nee</Button>
     <Button onClick={()=>setname ('Njan')} variant="contained" color="success">Njan</Button>
     <Button onClick={()=>setname ('Njammal')} variant="contained" color="success">Njammal</Button>
     </Stack>
    </div>

  )
}

export default New