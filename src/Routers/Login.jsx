import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
<div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" href="#">Action</Link></li>
    <li><Link classNamee="dropdown-item" href="#">Another action</Link></li>
    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" href="#">Separated link</Link></li>
  </ul>
</div>
    </div>
  )
}

export default Login
