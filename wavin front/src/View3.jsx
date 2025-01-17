import { Button, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View3 = () => {
    const [data, setdata] = useState([])
    axios.get("http://localhost:3001/view")
        .then((res) => {
            setdata(res.data)
            console.log(res.data)
        })

    const del = (id) => {
        axios.delete("http://localhost:3001/remove/" + id)
    }
    const navigate = useNavigate()
    return (
        <div>
            <h1>TABLE</h1>
            <Card>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Place</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((val) => {
                                    return (
                                        <TableRow>
                                            <TableCell>{val.Name}</TableCell>
                                            <TableCell>{val.Age}</TableCell>
                                            <TableCell>{val.Category}</TableCell>
                                            <TableCell>{val.Place}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => { del(val._id) }}>DELETE</Button>
                                                
                                                <Button onClick={() => { navigate("/add",{state:{data:val}})}}>EDIT</Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

        </div>
    )
}

export default View3
