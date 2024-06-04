import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to='/Home'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Skills'>Skills</Link>
      <Link to='/Projects'>Projects</Link>
    </div>
  )
}

export default Navbar

