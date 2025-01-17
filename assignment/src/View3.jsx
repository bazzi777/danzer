import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const View3 = () => {
    const [data,setdata]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setdata(res.data)
    })
  return (
    <div>
      <h1>TABLE</h1>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell>(val.name)</TableCell>
                                <TableCell>(val.age)</TableCell>
                                <TableCell>(val.category)</TableCell>
                                <TableCell>(val.place)</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default View3
