import React from 'react'
import {Link} from 'react-router-dom'
import './Profile.css';

function Navbar() {
  return (
    <div>
        <nav className="krishna">
      <Link to='/Home'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Skills'>Skills</Link>
      <Link to='/Projects'>Projects</Link>
      <Link to='/todos/33?posts=5&category=admins'>Todos</Link>
 
        </nav>
    </div>
  )
}

export default Navbar

