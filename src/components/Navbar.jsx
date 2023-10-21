import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-primary  sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">NewSify</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/business">Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/health">Health</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/sports">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/science">Science</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode()}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
