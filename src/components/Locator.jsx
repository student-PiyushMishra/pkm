import React from "react";
import {useNavigate, useLocation} from "react-router-dom"

const Locator = () => {

const navigate = useNavigate();
  const location = useLocation();
const parts = location.pathname.split('/').filter(e => e);
  const displayParts = parts.length <= 1 ? [] : [parts[0]];

  const handleClick = (to) => {
    navigate(to);
  };
  return (
    
      <div className="locator">
        <span onClick={() => handleClick('/')} className="crumb">Home</span>
        {displayParts.map((part, index) => (
          <React.Fragment key={index}>
            <span className="separator">{'>'}</span>
            <span>
              <span
                onClick={() => handleClick(`/${part}`)}
                className="crumb"
              >
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </span>
            </span>
          </React.Fragment>
        ))}
      </div>
  )
}

export default Locator
