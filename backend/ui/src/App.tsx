import React, { useState } from 'react';
import {MenuType4 as Menu}  from './components/Menu/Menu'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

const App: React.FC = () => {
  const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);


  return (
    <main>
      <header className="h-screen w-screen flex flex-col justify-start items-stretch">
        <Nav />
        <div className="flex-1 flex">
          <div className={`pt-16 flex-none h-full w-40 bg-gray-200 transition-600 ${!isPaneOpen?'-ml-40':'-ml-0'}`}>
            Hello from side
            <Menu menuState={isPaneOpen} onMenuStateChange={setIsPaneOpen} extraClasses={'hidden sm:block fixed left-p2 bottom-p2 rotate-p270-scale-800'}/>
          </div>
          <div className="flex-1 bg-gray-100 transition-600"><Hero /></div>
        </div>   
      </header>

      
      <h1>Hello from Main</h1>
    </main>
  );
}

export default App;
