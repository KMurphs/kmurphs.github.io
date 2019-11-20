import React, { useState } from 'react';
import './AboutMe.css';
import useTransition from '../TransitionHook/useTransition';


type Props = {
  isCurrentlyDisplayed: boolean
}
const AboutMe: React.FC<Props> = (props) => {
  
  const [hasDefaultState, setHasDefaultState] = useState<boolean>(false)
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
          <div className="col-sm-12 col-lg-6 col-xl-4">
            <img src="/imgs/profile.png" alt="Profile" className="w-100 h-100"/>
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-4 text-left">
            <h3>2</h3>
            <p className="text-small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, cupiditate neque odio architecto quidem placeat corrupti commodi nam earum iste, perspiciatis in quas sint illo consectetur distinctio ex alias aspernatur?</p>
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-4 text-left">
            <div><span>Age</span> 29</div>
            <div><span>Residence</span> 29</div>
            <div><span>Address</span> 29</div>
            <div><span>Email</span> 29</div>
            <div><span>Phone</span> 29</div>
            <div><span>Skype</span> 29</div>
            <div><span>Freelance</span> 29</div>
            <div className="d-flex justify-content-start align-items-center media-icons-container">
              <div><i className="fab fa-facebook-f"></i></div>
              <div><i className="fab fa-facebook-f"></i></div>
              <div><i className="fab fa-facebook-f"></i></div>
              <div><i className="fab fa-facebook-f"></i></div>
              <div><i className="fab fa-facebook-f"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="services-title">
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
        <div className="clients-title">
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
        <div className="testimonials-title">
          <span><p>testimonials</p></span>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>1</h1></div>
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>2</h1></div>
            <div className="col-sm-12 col-md-6 col-xl-4"><h1>3</h1></div>
        </div>
      </div>


      <div className="fun-facts">
        <div className="fun-facts-title">
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
