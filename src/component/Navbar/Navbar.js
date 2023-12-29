import React, { useState } from 'react';
import './Navbar.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Body from '../Body/Body';
import Header from '../header/header';
import images from '../assets/images.png'

const Navbar = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [resume, setResume] = useState(true);
  const [signupData, setSignupData] = useState(null);

  const handleSigninClick = () => {
    setShowSignin(true);
    setResume(false);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setResume(false);
    setShowSignin(false);
  };

  const handleResumeClick = () => {
    setResume(true);
    setShowSignup(false);
    setShowSignin(false);
  };

  const handleSigninSuccess = ({email,password}) => {
    // Handle sign-in success (e.g., update user status, redirect, etc.)
    if (signupData && signupData.email === email && signupData.password === password) {
      console.log('Signin successful');
      return true;
    } else {
      console.log('Invalid email or password');
      return false;
    }
  };

  const handleSignupSuccess = (data) => {
    // Handle sign-up success (e.g., show success message, redirect, etc.)
    setSignupData(data);
    console.log('Signup successful');
  };

  return (
    <div>
      <div className="navcontainer">
        <img src={images} alt="My Perfect Resume" />
        <nav className="navbar">
          <span onClick={handleResumeClick} className="nav-link">
            Resume
          </span>
          <button className="nav-button" onClick={handleSigninClick}>
            Sign In
          </button>
          <button className="nav-button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </nav>
      </div>
      {showSignin && <Signin onSuccess={handleSigninSuccess} />}
      {showSignup && <Signup onSuccess={handleSignupSuccess} />}
      {resume && <Header />}
      {resume && <Body />}
    </div>
  );
};

export default Navbar;
