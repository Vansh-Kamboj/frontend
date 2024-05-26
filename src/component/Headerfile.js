import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './headerfilecss.css'; // Import the CSS file

const Headerfile = () => {
    return (
        <AppBar position="static" className="custom-appbar">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Student Solutions
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                    Providing solutions based on NCERT books
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Headerfile;
