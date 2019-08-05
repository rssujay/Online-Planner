import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
    return (
        <header style={{backgroundColor:"#333"}}>
            <Navbar variant="dark">
                <Navbar.Brand>Todo Planner</Navbar.Brand>
            </Navbar>
            <p className="text-left pb-2 mx-3" style={{color:"#AAA"}}>Deadline management made easier</p>
        </header>
    )
}
