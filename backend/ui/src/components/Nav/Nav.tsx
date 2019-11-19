import React, { useState } from 'react';
import './Nav.css';
import { Pages } from '../../App';


type Props = {
  activePage: Pages,
  onDisplayNewPage: (newPage: Pages)=>void
}

const Nav: React.FC<Props> = (props) => {

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
              <button className={`nav-item d-flex justify-content-center align-items-center nav-link ${props.activePage===Pages.HOME?'active':''}`} onClick={(evt)=>props.onDisplayNewPage(Pages.HOME)}>Home</button>
              <button className={`nav-item d-flex justify-content-center align-items-center nav-link ${props.activePage===Pages.ABOUTME?'active':''}`} onClick={(evt)=>props.onDisplayNewPage(Pages.ABOUTME)}>About Me</button>
              <button className={`nav-item d-flex justify-content-center align-items-center nav-link ${props.activePage===Pages.RESUME?'active':''}`} onClick={(evt)=>props.onDisplayNewPage(Pages.RESUME)}>Resume</button>
              <button className={`nav-item d-flex justify-content-center align-items-center nav-link ${props.activePage===Pages.CONTACT?'active':''}`} onClick={(evt)=>props.onDisplayNewPage(Pages.CONTACT)}>Contact</button>
              <button className={`nav-item d-flex justify-content-center align-items-center nav-link ${props.activePage===Pages.PORTFOLIO?'active':''}`} onClick={(evt)=>props.onDisplayNewPage(Pages.PORTFOLIO)}>Portfolio</button>
            </div>
          </div>
      </React.Fragment>
  );
}

export default Nav;
