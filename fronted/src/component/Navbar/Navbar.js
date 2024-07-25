import React, { useState } from 'react';
import './Navbar.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Body from '../Body/Body';
import Header from '../header/header';
import images from '../assets/images.png';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("email")
    navigate("/signin")
  }

  return (
    <>
      <div className="navcontainer">
        <img src={images} alt="My Perfect Resume" />
        <div className='up'>

          <nav className="navbar">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/body" className="nav-link">Resume</Link>
            {!(localStorage.getItem('authToken')) ?
              <div className='login'>
                <Link to="/signin" className="nav-button">Sign In</Link>
                <Link to="/signup" className="nav-button">Sign Up</Link>

              </div>
              : <button onClick={handleLogout}>Logout</button>
            }
            <Link to="/contact" className='nav-link'>Contact Us</Link>
          </nav>
        </div>
      </div>
      {<Sidebar />}
    </>
  );
};

export default Navbar;
