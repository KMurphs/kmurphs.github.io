import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav/>
      <div className="Pages">
        {/* <Home/> */}
        {/* <AboutMe/> */}
        {/* <Resume/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
