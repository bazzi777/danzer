import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Api = () => {
    const [data, setdata] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    setdata(response.data)
    console.log(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return (
    <Stack style={{marginTop:40}}>
    <Table>
        
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            data.map((val)=>{
                return(
            <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.address.city}</TableCell>
            </TableRow>
                )
            })
        }
  
        </TableBody>
    </Table>
    </Stack>
  )}
export default Api