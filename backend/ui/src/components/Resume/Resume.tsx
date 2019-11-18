import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="page resume">
      <div className="title">
        <span><h3>Resume</h3></span>
        <span><p>Artist, Thinker, Creative Doer</p></span>
      </div>

      <div className="content">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-4"><h1>1</h1></div>
          <div className="col-sm-12 col-md-6 col-xl-4"><h1>2</h1></div>
          <div className="col-sm-12 col-md-6 col-xl-4"><h1>3</h1></div>    
        </div>
      </div>



    </div>
  );
}

export default Resume;
