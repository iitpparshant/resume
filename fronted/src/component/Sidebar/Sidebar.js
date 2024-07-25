import React, { useState } from 'react';
import './Sidebar.css';
import side from '../assets/side.png';
import cross from '../assets/cross.png';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <div>
      <button className={`toggle-button ${isSidebarOpen ? 'open' : 'close'}`} onClick={handleToggle}>
        {isSidebarOpen ? <img src={cross} alt="My Perfect Resume" /> : <img src={side} alt="My Perfect Resume" />}
      </button>
      <nav className={`sidebar ${isSidebarOpen ? 'show' : 'hide'} navbar`}>
        <div className='homecontact'>
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/body" className="nav-link">Resume</Link>
          <Link to="/contact" className='nav-link'>Contact Us</Link>
        </div>
        <div className='signinup'>
          {!(localStorage.getItem('authToken')) ? (
            <div className='login'>
              <Link to="/signin" className="nav-button">Sign In</Link>
              <Link to="/signup" className="nav-button">Sign Up</Link>
            </div>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
