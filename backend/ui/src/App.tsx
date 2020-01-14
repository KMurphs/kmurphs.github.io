import React, { useState } from 'react';
import {MenuType4 as Menu}  from './components/Menu/Menu'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

const App: React.FC = () => {
  const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);


  return (
    <React.Fragment>
      <header className="min-h-screen w-screen flex flex-col justify-start items-stretch">
        <Nav />
        <div className="flex-1 flex">
          <div style={{backgroundColor: 'red'}} className={`fixed pt-16 ${!isPaneOpen?'left-m40':'left-0'} top-0 bottom-0 w-40 transition-600`}>
            Hello from side
            <Menu menuState={isPaneOpen} onMenuStateChange={setIsPaneOpen} extraClasses={'hidden sm:block fixed left-p2 bottom-p2 rotate-p270-scale-800'}/>
          </div>
          <div className={`flex-1 bg-gray-100 transition-600 ${isPaneOpen?'ml-40':'ml-0'}`}><Hero /></div>
        </div>   
      </header>

      <main className={`transition-600 ${isPaneOpen?'ml-40':'ml-0'}`}>
        <h1>Hello from Main</h1>
      </main>

    </React.Fragment>


  );
}

export default App;
