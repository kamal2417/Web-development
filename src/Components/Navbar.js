import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
  let change = {
    color: "white",
    backgroundColor: "#2f4858",
    cursor: "pointer"
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-black" style={change}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={change}>{props.heading}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" style={change} activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={change} to="/link">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" style={change} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" style={change} href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div className="form-check form-switch mx-5">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode change</label>
            </div>
            <form className="d-flex" role="search">
            <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" style={change} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
