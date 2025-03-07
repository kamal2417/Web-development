import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let kamal={
    color:"white",
    fontFamily: "Lora",
    fontopticalSizing:"auto",
    fontWeight: "weight",
    fontStyle: "normal",
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">Krishna Tech solutions</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/" style={kamal}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/about" style={kamal}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/contact" style={kamal}>Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
