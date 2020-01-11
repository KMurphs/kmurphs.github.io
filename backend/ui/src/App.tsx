import React from 'react';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

const App: React.FC = () => {
  return (
    <main>
      <header className="h-screen w-screen flex flex-col justify-start items-stretch">
        <Nav />
        <div className="flex-1 flex ">
          <div className="flex-none w-40 -ml-40 bg-gray-200 transition-600">Hello from side</div>
          <div className="flex-1 bg-gray-100 transition-600"><Hero /></div>
        </div>   
      </header>

      
      <h1>Hello from Main</h1>
    </main>
  );
}

export default App;
