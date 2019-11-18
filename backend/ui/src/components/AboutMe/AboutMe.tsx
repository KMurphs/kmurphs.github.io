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
        <div>
          <span><p>Presentation</p></span>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xl-4"><h1>1</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-4"><h1>2</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-4"><h1>3</h1></div>
        </div>
      </div>

      <div className="services">
        <div>
          <span><p>services</p></span>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>1</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>2</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>3</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>3</h1></div>
        </div>
      </div>



      <div className="clients">
        <div>
          <span><p>clients</p></span>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>1</h1></div>
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>2</h1></div>
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>3</h1></div>
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>1</h1></div>
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>2</h1></div>
            <div className="col-sm-12 col-md-4 col-xl-2"><h1>3</h1></div> 
        </div>
      </div>


      <div className="testimonials">
        <div>
          <span><p>testimonials</p></span>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>1</h1></div>
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>2</h1></div>
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>3</h1></div>
        </div>
      </div>


      <div className="fun-facts">
        <div>
          <span><p>fun-facts</p></span>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>1</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>2</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>3</h1></div>
          <div className="col-sm-12 col-lg-6 col-xl-3"><h1>3</h1></div>
        </div>
      </div>






    </div>
  );
}

export default AboutMe;
