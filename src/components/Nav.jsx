import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/Nav.components.css";
import Outputs from "./Outputs.jsx";
import Locator from "./Locator.jsx"

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false); // ✅ added
  const navigate = useNavigate()
  return (
    <div className='nav'>
      <div className="logo" onClick={() => navigate('/')} ></div>
      <div className="desktop_locator"><Locator /></div>
      {/* Desktop options */}
      <div className="options">
        <a href="https://github.com/student-PiyushMishra"><i class="ri-github-fill"></i></a>
        <a className="move_over" href="mailto:student.piyushmishra@gmail.com">Email</a>
      </div>

      {/* Hamburger / close */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <i class="ri-close-circle-fill"></i> : <i class="ri-menu-4-fill"></i>}
      </div>

      {/* Mobile slide-out */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Locator /> 
        <div className="top">
         <a href="https://github.com/student-PiyushMishra"><i class="ri-github-fill"></i></a>
        <a className="move_over" href="mailto:student.piyushmishra@gmail.com">Email</a>
        </div>

    </div>
    </div>
  );
};

export default Nav;

