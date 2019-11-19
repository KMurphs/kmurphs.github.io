import React, { useState } from 'react';
import './AboutMe.css';
import useTransition from '../TransitionHook/useTransition';


type Props = {
  isCurrentlyDisplayed: boolean
}
const AboutMe: React.FC<Props> = (props) => {
  
  const [hasDefaultState, setHasDefaultState] = useState<boolean>(true)
  const {transition} = useTransition(props.isCurrentlyDisplayed, ()=>setHasDefaultState(true), ()=>setHasDefaultState(false))
  
  return (
    <div className={`page about-me ${props.isCurrentlyDisplayed?'':'page--invisible'} ${hasDefaultState?'about-me--default':''}`}>
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
