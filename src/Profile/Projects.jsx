import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Projects() {
  return (
    <div>
      <h4>Projects which are developed by him</h4>
      <nav>
        <Link to='/Projects/Minor'>Minor</Link>
        <Link to='/Projects/Major'>Major</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Projects
