import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
          <Link to={'/cars'}><li>Home</li></Link>
          <Link to={'/cars/create'}><li>Add Car</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar