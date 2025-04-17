import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div >
      <nav className="navbar navbar-expand-lg fixed-top  navbar-dark" style={{ backgroundColor: "#0d6efd" }}>
      <div className="container">
        <a className="navbar-brand h1 mb-0" href="#">Portfolio</a>
        <button
          className="navbar-toggler"
          style={{ border: "none", boxShadow: "none" }}
          type="button"
          onClick={handleToggle}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark" style={{ color: "white" }}></i>
          ) : (
            <i className="fa-solid fa-bars-staggered" style={{ color: "white" }}></i>
          )}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#Hero" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#About" onClick={handleLinkClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#Skills" onClick={handleLinkClick}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#Project" onClick={handleLinkClick}>Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#Contacts" onClick={handleLinkClick}>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </div>
    
  );
};

export default Navbar;
