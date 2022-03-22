import React from "react";
import '../Navbar/Navbar.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const Navbar = () => {

    return ( 
        <AppBar position="static" color="inherit">
            <Toolbar className="Toolbar">
                <Typography variant="h6" component="div">
                    Where in the world?
                </Typography>
                    
                <Button color="inherit">
                    <svg className="ToggleMode" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" 
                        d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z" 
                        clipRule="evenodd"></path>
                    </svg>
                    Dark Mode
                </Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;