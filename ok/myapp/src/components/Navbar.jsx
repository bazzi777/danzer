import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>Navbar
        <AppBar >
            <Toolbar>
                <h1>Bhuhahhahha</h1>
                
                <Link to='log'>
                <Button variant='contained'>Login</Button>
                </Link>


                <Link to='sign'>
                <Button variant='contained'>Signup</Button>
                </Link>

                <Link to='/'>
                <Button variant='contained'>Home</Button>
                </Link>

                <Link to='/count'>
                <Button variant='contained'>Counter</Button>
                </Link>

                <Link to='/new'>
                <Button variant='contained'>Group</Button>
                </Link>

                <Link to='/api'>
                <Button variant='contained'>Class</Button>
                </Link>
          
          
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar