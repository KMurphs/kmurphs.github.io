import React from 'react';
// import './Nav.css';

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <nav className="nav-controls">
        <li className="nav-logo">Alex Smith</li>
        <li>Hamburger</li>
      </nav>
      <nav className="nav-contents">
        <li>Home</li>
        <li>About Me</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </nav>
    </div>
  );
}

export default Nav;
