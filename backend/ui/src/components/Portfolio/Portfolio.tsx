import React from 'react';
import './Portfolio.css';
type Props = {
  isCurrentlyDisplayed: boolean
}
const Portfolio: React.FC<Props> = (props) => {
  return (
    <div className={`page portfolio ${props.isCurrentlyDisplayed?'':'page--invisible'}`}>
      <div className="title">
        <span><h3>Portfolio</h3></span>
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

export default Portfolio;
