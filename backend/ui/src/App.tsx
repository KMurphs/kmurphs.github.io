import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav/>
      <div className="Pages">
        <Home/>
        {/* <AboutMe/> */}
      </div>
    </div>
  );
}

export default App;
