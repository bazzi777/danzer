import { Button, TextField } from '@mui/material'
import React from 'react'

const Add2 = () => {
  return (
    <div>
      <h1>Application form</h1>
      <TextField label="Name" variant="outlined" /><br></br><br></br>
      <TextField label="Age" variant="outlined"/><br></br><br></br>
      <TextField label="Category" variant="outlined"/><br></br><br></br>
      <TextField label="Place" variant="outlined"/><br></br><br></br>
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Add2
