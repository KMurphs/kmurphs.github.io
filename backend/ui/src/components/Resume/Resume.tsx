import React, { useState } from 'react';
import './Resume.css';
import useTransition from '../TransitionHook/useTransition';
type Props = {
  isCurrentlyDisplayed: boolean
}
const Resume: React.FC<Props> = (props) => {
  
  const [hasDefaultState, setHasDefaultState] = useState<boolean>(true)
  const {transition} = useTransition(props.isCurrentlyDisplayed, ()=>setHasDefaultState(true), ()=>setHasDefaultState(false))
  
  return (
    <div className={`page resume ${props.isCurrentlyDisplayed?'':'page--invisible'} ${hasDefaultState?'resume--default':''}`}>
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
