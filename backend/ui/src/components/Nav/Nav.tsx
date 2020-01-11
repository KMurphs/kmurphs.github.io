import React from 'react';

const Nav: React.FC = () => {
  return (

      <nav>
        <section className="flex justify-between items-center bg-gray-100 p-2">
          <div className="border-4 border-gray-200 cursor-pointer logo p-1 pt-2 pr-2 rounded-50 bg-gray-900 w-12 h-12 flex-center text-white" style={{fontFamily: "'Bilbo', cursive", fontSize: '1.8rem'}}>
            <a href="/">SK</a>
          </div>
          <label id="menu-icon" htmlFor="toggle-control" className="cursor-pointer w-10 h-8 relative transition-300 rotate-0">
            <input type="checkbox" id="toggle-control" className="menu-icon--opened absolute opacity-0"/>
            <span className="top-0 block absolute h-2 w-full bg-orange-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
            <span className="top-p4/10 block absolute h-2 w-full bg-orange-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
            <span className="top-p8/10 block absolute h-2 w-full bg-orange-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
          </label>
        </section>
      </nav>

  );
}

export default Nav;
