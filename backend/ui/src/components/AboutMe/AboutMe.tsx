import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="page about-me">
      <div className="title">
        <span><h3>About Me</h3></span>
        <span><p>Artist, Thinker, Creative Doer</p></span>
      </div>
      <div className="presentation">
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
      </div>
      <div className="services"></div>
      <div className="clients"></div>
      <div className="testimonials"></div>
      <div className="fun-facts"></div>
    </div>
  );
}

export default AboutMe;
