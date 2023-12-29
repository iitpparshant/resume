import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file for styling
import downloadsign from '../assets/downloadsign.png';

const Signup = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });

  const { firstName, lastName, email, password, dob, gender } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !dob || !gender) {
      alert('Complete all fields');
      return;
    }

    if (password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }

    // Validate email format using a simple regex (this is basic and can be enhanced)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('Enter a valid email');
      return;
    }

    // Simulate user registration logic (replace with your actual registration logic)
    alert('User registered successfully');
    onSuccess({email,password}); // Call the callback function on success
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={downloadsign} alt="" />
        <h2 className="Signuptext">Sign Up</h2>

        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange} />
<input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange} />
<input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
<input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
<input type="date" name="dob" placeholder="Date of Birth" value={dob} onChange={handleChange} />


        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" onChange={handleChange} />
            Other
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
