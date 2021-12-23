import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrap">
        <Link to='/'><div className="navbar-logo">
          Budgetx
          <i className="fas fa-wallet"> </i>
        </div></Link>
        <div className="navbar-button">
          <a href="https://github.com/raniamhelmy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>Star</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
