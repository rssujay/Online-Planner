import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header() {
    return (
        <header>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:"#8AAAFF"}}>
                    <Typography variant="h3">Todo List</Typography> 
                </Toolbar>
                <Toolbar variant="dense" style={{backgroundColor:"#6699FF"}}>
                    <Typography variant="p">Deadline management made easier</Typography>  
                </Toolbar>
            </AppBar>          
        </header>
    )
}
