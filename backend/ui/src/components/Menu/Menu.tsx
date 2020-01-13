import React from 'react';
import './Menu.css';


type Props = {
  menuState: boolean,
  onMenuStateChange: (newState: boolean) => void,
  extraClasses?: string
}
const defaultMenuProps = {
  menuState: false,
  onMenuStateChange: (newState: boolean) => console.log(`Menu changed state to: ${newState}`),
  extraClasses: 'Use utility style classes to further customize the menu. (Note that only the outer container is targeted by these classes)'
}



const MenuType1: React.FC<Props> = ({menuState, onMenuStateChange, extraClasses}) => {

    //Unique ID to prevent several instances of the menu on the same page to interfere with each other due to the use of label and input ids
    const uniqueID = `${new Date().getTime()}-${Math.round((Math.random()*1000))}`;

    return (

        <label id={`menu-icon-${uniqueID}`} htmlFor={`toggle-control-${uniqueID}`} className={`menu-type-1 cursor-pointer w-10 h-8 transition-300 z-50 ${extraClasses}`}>
            <input type="checkbox" 
                    id={`toggle-control-${uniqueID}`}
                    className="menu-icon--opened absolute opacity-0" 
                    checked={menuState} 
                    onChange={(evt) => onMenuStateChange(evt.target.checked)}
            />
            <span className="top-0 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
            <span className="top-p4/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
            <span className="top-p8/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
        </label>

    );
}
MenuType1.defaultProps = defaultMenuProps
export default MenuType1;


const MenuType2: React.FC<Props> = ({menuState, onMenuStateChange, extraClasses}) => {

  //Unique ID to prevent several instances of the menu on the same page to interfere with each other due to the use of label and input ids
  const uniqueID = `${new Date().getTime()}-${Math.round((Math.random()*1000))}`;

  return (

      <label id={`menu-icon-${uniqueID}`} htmlFor={`toggle-control-${uniqueID}`} className={`menu-type-2 cursor-pointer w-10 h-8 transition-300 z-50 ${extraClasses}`}>
          <input type="checkbox" 
                  id={`toggle-control-${uniqueID}`}
                  className="menu-icon--opened absolute opacity-0" 
                  checked={menuState} 
                  onChange={(evt) => onMenuStateChange(evt.target.checked)}
          />
          <span className="top-0 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-0 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-p1/2 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p4/10 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p4/10 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-p1/2 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p8/10 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p8/10 block absolute h-2 w-1/2 bg-gray-600 rounded-lg opacity-1 left-p1/2 rotate-0 transition-300-ease-in-out"></span>
      </label>

  );
}
MenuType2.defaultProps = defaultMenuProps;




const MenuType3: React.FC<Props> = ({menuState, onMenuStateChange, extraClasses}) => {

  //Unique ID to prevent several instances of the menu on the same page to interfere with each other due to the use of label and input ids
  const uniqueID = `${new Date().getTime()}-${Math.round((Math.random()*1000))}`;

  return (

      <label id={`menu-icon-${uniqueID}`} htmlFor={`toggle-control-${uniqueID}`} className={`menu-type-3 cursor-pointer w-10 h-8 transition-300 z-50 ${extraClasses}`}>
          <input type="checkbox" 
                  id={`toggle-control-${uniqueID}`}
                  className="menu-icon--opened absolute opacity-0" 
                  checked={menuState} 
                  onChange={(evt) => onMenuStateChange(evt.target.checked)}
          />
          <span className="top-0 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p4/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p4/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p8/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
      </label>

  );
}
MenuType3.defaultProps = defaultMenuProps;






const MenuType4: React.FC<Props> = ({menuState, onMenuStateChange, extraClasses}) => {

  //Unique ID to prevent several instances of the menu on the same page to interfere with each other due to the use of label and input ids
  const uniqueID = `${new Date().getTime()}-${Math.round((Math.random()*1000))}`;

  return (

      <label id={`menu-icon-${uniqueID}`} htmlFor={`toggle-control-${uniqueID}`} className={`menu-type-4 cursor-pointer w-10 h-8 transition-300 z-50 ${extraClasses}`}>
          <input type="checkbox" 
                  id={`toggle-control-${uniqueID}`}
                  className="menu-icon--opened absolute opacity-0" 
                  checked={menuState} 
                  onChange={(evt) => onMenuStateChange(evt.target.checked)}
          />
          <span className="top-0 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p4/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          <span className="top-p8/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
      </label>

  );
}
MenuType4.defaultProps = defaultMenuProps;

















export {MenuType2, MenuType3, MenuType4};