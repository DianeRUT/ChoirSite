import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('EVENTS'); 

  const options = ['Concerts', 'Sports', 'Festivals'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="Nav-container">
      <div className="nav-image">
       
      </div>
      <div className="nav-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li className="dropdown-wrapper">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span className="event-label">{selectedOption}</span>
              <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
              <ul className="dropdown-menu">
                {options.map((option) => (
                  <li
                    key={option}
                    className="dropdown-item"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>COMMISION</li>
          <li>OUR SCHEDULE</li>
          <li className="nav-button">
            <button>SUPPORT US</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
