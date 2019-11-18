import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';


export enum Pages {
  HOME = 0,
  ABOUTME,
  RESUME,
  CONTACT,
  PORTFOLIO
}
const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<Pages>(Pages.HOME)

  return (
    <div className="App">
      <Nav onDisplayNewPage={(newPage: Pages) => setCurrentPage(newPage)} activePage={currentPage}/>
      <div className="Pages">
        <Home isCurrentlyDisplayed={currentPage===Pages.HOME}/>
        <AboutMe isCurrentlyDisplayed={currentPage===Pages.ABOUTME}/>
        <Resume isCurrentlyDisplayed={currentPage===Pages.RESUME}/>
        <Contact isCurrentlyDisplayed={currentPage===Pages.CONTACT}/>
        <Portfolio isCurrentlyDisplayed={currentPage===Pages.PORTFOLIO}/>
      </div>
    </div>
  );
}

export default App;
