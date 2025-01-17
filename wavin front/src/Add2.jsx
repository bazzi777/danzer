import { Button, Card, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add2 = () => {
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [category, setcat] = useState("")
  const [place, setpla] = useState("")

  const nav = useNavigate()
  const submit = () => [

    axios.post("http://localhost:3001/add", {
      Name: name,
      Age: age,
      Category: category,
      Place: place
    })
      .then((r) => {
        console.log(r)
        nav('/ss')
      })
  ]

  const update = () => {

    const {data} = state
    axios.put("http://localhost:3001/update/"+data._id, {
      Name: name,
      Age: age,
      Category: category,
      Place: place
    })
      .then((r) => {
        console.log(r)
      })
    }

  const {state} = useLocation()
  useEffect(()=>{
    if(state != null){
      const {data} = state
      setname(data.Name)
      setage(data.Age)
      setcat(data.Category)
      setpla(data.Place)
    }
  },[])

  return (
    <div>
      
      <Card style={{marginTop:"30px",paddingBottom:"30px"}}>
      <h1>Application form</h1>
        <TextField label="Name" value={name} onChange={(e) => setname(e.target.value)} variant="outlined" /><br></br><br></br>
        <TextField label="Age" value={age} onChange={(e) => setage(e.target.value)} variant="outlined" /><br></br><br></br>
        <TextField label="Category" value={category} onChange={(e) => setcat(e.target.value)} variant="outlined" /><br></br><br></br>
        <TextField label="Place" value={place} onChange={(e) => setpla(e.target.value)} variant="outlined" /><br></br><br></br>
        { state == null ? <Button variant="contained" onClick={submit}>SUBMIT</Button> : <Button variant="contained" onClick={update}>UPDATE</Button>}</Card>
    </div>
  )
}

export default Add2
