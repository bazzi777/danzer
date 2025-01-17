import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <AppBar style={{backgroundColor:"yellow"}}>
            <Toolbar>
            
                <img src="https://dynamic.brandcrowd.com/preview/logodraft/1c803cec-7f61-4327-9e0e-6563d2ca1fd1/image/large.png" width="40px"/>
                <h2></h2>&nbsp;&nbsp;
               
                <Link to='/'>
                    <Button variant="contained">HOME</Button>
                    </Link>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                
                <Link to='/add'>
                    <Button variant="contained">ADD</Button>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </Link>
                <Link to='/ss'>
               <Button variant="contained">VIEW</Button>
                </Link>
                 
                
               
            </Toolbar>
        </AppBar>
        </div >
    )
}

export default navbar