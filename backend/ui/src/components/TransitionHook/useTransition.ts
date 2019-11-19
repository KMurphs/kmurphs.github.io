import React, { useState } from 'react';
import { string } from 'prop-types';

/*
This is a Custom React Hook that handles our form submission
*/
export enum Transition {
  NOT_TRANSITIONING=0,
  APPEARING,
  DISAPPEARING
}
export type ReturnObj = {
  transition: string,
}

const useTransition = (willBecomeVisible: boolean, cbForceDefaultState: ()=>any, cbLeaveDefaultState: ()=>any): ReturnObj => {

  let transition: Transition = Transition.NOT_TRANSITIONING
  const [isCurrentlyVisible, setIsCurrentlyVisible] = useState<boolean>(true)


  if(isCurrentlyVisible !== willBecomeVisible){
    setIsCurrentlyVisible(willBecomeVisible)
    isCurrentlyVisible && !willBecomeVisible 
      && (transition = Transition.DISAPPEARING) 
      && (setTimeout(()=> {cbForceDefaultState(); console.log('Forcing Component Back to its default state')}, 600)) 
      && (console.log('Component is: ', Transition[transition]))

    !isCurrentlyVisible && willBecomeVisible 
      && (transition = Transition.APPEARING) 
      && (setTimeout(()=> {cbLeaveDefaultState(); console.log('Forcing Component to leave its default state')}, 0)) 
      && (console.log('Component is: ', Transition[transition]))
      
  }


  return {
    transition: Transition[transition]
  };
};

export default useTransition;