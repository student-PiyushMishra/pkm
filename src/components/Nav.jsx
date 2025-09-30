import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../assets/Nav.components.css";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const parts = location.pathname.split('/').filter(e => e);

  const displayParts = parts.length <= 1 ? [] : [parts[0]];

  const handleClick = (to) => {
    navigate(to);
  };

  return (
    <div className='nav'>
    <div className="logo">
      
    </div>
      <div className="locator">
        <span onClick={() => handleClick('/')} className="crumb">Home</span>
        {displayParts.map((part, index) => (
          <>
          <span className="separator">{'>'}</span>
          <span key={index}>
            <span
              onClick={() => handleClick(`/${part}`)}
              className="crumb"
            >
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </span>
          </span>
          </>
        
        ))}
      </div>
      <div className="options">
        <a href="https://github.com/student-PiyushMishra"><i class="ri-github-fill"></i></a>
        <a className="move_over" href="http://mailto:student.piyushmishra@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default Nav;
