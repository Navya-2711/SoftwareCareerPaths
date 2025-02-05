// src/Sidebar.js
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Cross (X) Icon
import { AiOutlineMenu } from 'react-icons/ai'; // Hamburger Icon
import './Sidenav.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger or Close Icon */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Companies">Companies</a></li>
            <li><a href="/Contact">Contact</a></li>
            
            <li><a href="/Coding">Coding Questions</a></li>
            <li><a 
        href="https://chat.openai.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        
      >
       Ai
      </a></li>
      <li><a href="/Note">Note</a></li>


      <li><a href="/Login">Logout</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
