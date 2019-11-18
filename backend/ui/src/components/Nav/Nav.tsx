import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {
  return (
      <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div className="navbar-collapse h-100 d-flex flex-column justify-content-center align-items-stretch position-fixed" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item d-flex justify-content-center align-items-center nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item d-flex justify-content-center align-items-center nav-link" href="#">Features</a>
              <a className="nav-item d-flex justify-content-center align-items-center nav-link" href="#">Pricing</a>
              <a className="nav-item d-flex justify-content-center align-items-center nav-link" href="#">Pricing</a>
              <a className="nav-item d-flex justify-content-center align-items-center nav-link" href="#">Pricing</a>
            </div>
          </div>
      </React.Fragment>
  );
}

export default Nav;
