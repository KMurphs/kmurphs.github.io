import React, { useState } from 'react';
import { string } from 'prop-types';

/*
This is a Custom React Hook that forces a element to leave its default css class or force the default css class on it
*/
export enum Transition {
  NOT_TRANSITIONING=0,
  APPEARING,
  DISAPPEARING
}
export type ReturnObj = {
  transition: string,
}

const useTransition = (willBeInDefaultState: boolean, cbForceDefaultState: ()=>any, cbLeaveDefaultState: ()=>any): ReturnObj => {
  let printDebugMsgs = false
  let transition: Transition = Transition.NOT_TRANSITIONING
  const [isCurrentlyInDefaultState, setIsCurrentlyInDefaultState] = useState<boolean>(true)


  if(isCurrentlyInDefaultState !== willBeInDefaultState){
    setIsCurrentlyInDefaultState(willBeInDefaultState)
    isCurrentlyInDefaultState && !willBeInDefaultState 
      && (transition = Transition.DISAPPEARING) 
      && (setTimeout(()=> {cbForceDefaultState(); printDebugMsgs && console.log('Forcing Component Back to its default state')}, 600)) 
      && printDebugMsgs
      && (console.log('Component is: ', Transition[transition]))

    !isCurrentlyInDefaultState && willBeInDefaultState 
      && (transition = Transition.APPEARING) 
      && (setTimeout(()=> {cbLeaveDefaultState(); printDebugMsgs && console.log('Forcing Component to leave its default state')}, 0)) 
      && printDebugMsgs
      && (console.log('Component is: ', Transition[transition]))
      
  }


  return {
    transition: Transition[transition]
  };
};

export default useTransition;