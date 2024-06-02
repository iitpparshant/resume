import React, { useState } from 'react';
import './Signin.css';
import downloadsign from '../assets/downloadsign.png';
import { Link, useNavigate } from 'react-router-dom';

const Signin = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let navigate= useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://resume-lake-zeta.vercel.app/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: formData.email, password: formData.password })
    });
    const json= await response.json();
        console.log(json)
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        if(json.success){
          localStorage.setItem("userEmail",formData.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"),localStorage.getItem("userEmail"))
          navigate("/");
        }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <img src={downloadsign} alt="" />
        <h2 className="Signintext">Sign In</h2>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Submit</button>
        <Link to="/signup" className='new'>New user</Link>
      </form>
    </div>
  );
};

export default Signin;
