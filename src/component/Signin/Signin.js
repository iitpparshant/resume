import React, { useState } from 'react';
import './Signin.css';
import downloadsign from '../assets/downloadsign.png';

const Signin = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(null);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced email regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setMessage('Password should be at least 6 characters');
      return;
    }

    // Simulate sign-in logic (replace with your actual authentication logic)
    if(onSuccess({email,password})){
      setMessage('Signed in successfully');
    }
    else {
      setMessage('Invalid email or password. Please try again.');
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
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Submit</button>

        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default Signin;
