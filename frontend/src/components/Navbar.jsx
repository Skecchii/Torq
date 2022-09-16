import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar>
        <Nav>
          <Nav.Item>
            <Link to={'/cars'}>Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={'/cars/create'}>Add Car</Link>
          </Nav.Item>
        </Nav>
    </Navbar>
  )
}

export default NavBar