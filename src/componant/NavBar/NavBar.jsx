import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 

  return (
  
    <nav className={` flex justify-center items-center mx-28 my-30p  ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container  flex justify-between items-center max-w-[1153.5]">
        <div className=" text-lg font-bold">Your Name</div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to='/' >Blog</Link>
          <a href="#" >Project</a>
          <a href="#">About</a>
          <a href="/newsletter">Newsletter</a>
          <button 
        onClick={toggleDarkMode} 
        className={`p-2 rounded-full   ${darkMode ? 'bg-white' : 'bg-black'}`}
      >
        <div className='flex gap-5'> 
        <img src="/assets/img/sun.png" alt="" />
            <img src="/assets/img/moon.png" alt="" />
            
        </div>
      </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
           
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
           <a href="/" >Blog</a>
          <a href="#" >Project</a>
          <a href="#">About</a>
          <a href="/newsletter">Newsletter</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
