import React, {useState} from 'react';
import './Nav.css';


const Nav: React.FC = () => {
    const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);

    return (

        <nav className="fixed w-full">
            <section className="block flex justify-between items-center bg-gray-100 px-2 py-1">
                
                <div className="border-4 border-gray-200 cursor-pointer logo p-1 pt-2 pr-2 rounded-50 bg-gray-900 w-12 h-12 flex-center text-white" 
                     style={{fontFamily: "'Bilbo', cursive", fontSize: '1.4rem'}}>
                    <a href="/">SK</a>
                </div>


                <label id="menu-icon" htmlFor="toggle-control" className="cursor-pointer w-10 h-8 fixed md:relative right-0 transition-300 rotate-0 z-50 md:hidden">
                    <input type="checkbox" 
                            id="toggle-control" 
                            className="menu-icon--opened absolute opacity-0" 
                            checked={isPaneOpen} 
                            onChange={(evt) => setIsPaneOpen(evt.target.checked)}
                    />
                    <span className="top-0 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
                    <span className="top-p4/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
                    <span className="top-p8/10 block absolute h-2 w-full bg-gray-600 rounded-lg opacity-1 left-0 rotate-0 transition-300-ease-in-out"></span>
                </label>

            </section>
            <ul className={`pt-8 bg-gray-900 fixed top-0 bottom-0 right-${isPaneOpen ? '0' : 'm64'} w-64 z-40 transition-300 text-white flex flex-col justify-around 
                            md:pt-0 md:box-sizing-content md:flex-row md:bottom-auto md:h-12 md:right-0 md:left-auto md:items-center md:justify-end md:w-4/5 md:bg-gray-100 md:text-black`}>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2 active"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>About Me</span></a></li>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>Projects</span></a></li>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>Connect With Me</span></a></li>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>Testimonials</span></a></li>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>Contact</span></a></li>
                <li className="scale-border-on-hover md:h-full hover:bg-gray-300 hover:text-gray-900 transition-600 hover:transition-600 px-4 py-2"> <a href="#" className="h-full flex justify-center items-center pt-1"><span>Resume</span></a></li>
            </ul>
        </nav>

    );
}

export default Nav;
