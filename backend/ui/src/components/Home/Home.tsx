import React, { useState } from 'react';
import useTransition from '../TransitionHook/useTransition';
import './Home.css';


type Props = {
  isCurrentlyDisplayed: boolean
}

const Home: React.FC<Props> = (props) => {
  
  const [hasDefaultState, setHasDefaultState] = useState<boolean>(false)
  const {transition} = useTransition(props.isCurrentlyDisplayed, ()=>setHasDefaultState(true), ()=>setHasDefaultState(false))
  
  return (
    <div className={`home ${props.isCurrentlyDisplayed?'':'home--invisible'} ${hasDefaultState?'home--default':''}`}>
      <h1>Alex Smith</h1>
      <p>Web Developper</p>
    </div>
  );
}

export default Home;
