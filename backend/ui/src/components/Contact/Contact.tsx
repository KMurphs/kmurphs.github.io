import React, { useState } from 'react';
import './Contact.css';
import useTransition from '../TransitionHook/useTransition';
type Props = {
  isCurrentlyDisplayed: boolean
}
const Contact: React.FC<Props> = (props) => {
  
  const [hasDefaultState, setHasDefaultState] = useState<boolean>(true)
  const {transition} = useTransition(props.isCurrentlyDisplayed, ()=>setHasDefaultState(true), ()=>setHasDefaultState(false))
  
  return (
    <div className={`page contact ${props.isCurrentlyDisplayed?'':'page--invisible'} ${hasDefaultState?'contact--default':''}`}>
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
