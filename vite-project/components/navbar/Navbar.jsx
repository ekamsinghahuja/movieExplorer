import React, { useState } from 'react';
import './Navbarr.css';
import { Link , useNavigate } from 'react-router-dom';
import { useContext } from 'react';

function Navbar() {
    const [menu,setMenu] = useState("home");
    
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><h1 className='navbar-link'>MOVIE DHUNDO</h1></li>
        {/* <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;