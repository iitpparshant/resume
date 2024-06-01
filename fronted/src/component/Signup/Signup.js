import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file for styling
import downloadsign from '../assets/downloadsign.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid data");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={downloadsign} alt="" />
        <h2 className="Signuptext">Sign Up</h2>

        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <div className="gender-options">
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
            Female
          </label>
          <label htmlFor="other">
            <input type="radio" id="other" name="gender" value="other" onChange={handleChange} />
            Other
          </label>
        </div>

        <button type="submit">Submit</button>
        <Link to="/signin" className='new'>Already a user</Link>
      </form>
    </div>
  );
};

export default Signup;
