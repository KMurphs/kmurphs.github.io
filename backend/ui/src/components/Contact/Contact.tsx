import React from 'react';
import './Contact.css';
type Props = {
  isCurrentlyDisplayed: boolean
}
const Contact: React.FC<Props> = (props) => {
  return (
    <div className={`page contact ${props.isCurrentlyDisplayed?'':'page--invisible'}`}>
      <div className="title">
        <span><h3>Contact</h3></span>
        <span><p>Artist, Thinker, Creative Doer</p></span>
      </div>

      <div className="content">
        <div className="row">
          <div className="col-sm-12 col-md-6"><h1>1</h1></div>
          <div className="col-sm-12 col-md-6"><h1>2</h1></div>
        </div>
      </div>



    </div>
  );
}

export default Contact;
