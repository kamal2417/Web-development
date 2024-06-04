import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
          <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About me</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
