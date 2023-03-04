import React, {  useState } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {

  
    return (
        <div className='div-container'>
            <Navbar bg="dark" variant="dark" expand="sm" className='div-container'>
            <Container>
                    <Navbar.Brand ><NavLink to='/' >Get <span className='bg-danger p-1' >Your</span>  Car</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to='/' >Home</NavLink>
                            <NavLink to='/login' >Login</NavLink>
                            <NavLink to='/register' >Register</NavLink>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        
    )
}
