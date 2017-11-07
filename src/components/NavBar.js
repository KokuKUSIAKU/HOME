import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <a className="navbar-brand"><span id="fn">Koku</span><span id="ln"> KUSIAKU</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav  container justify-content-end">
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#portofolio">Portofolio</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>);

export default NavBar; 