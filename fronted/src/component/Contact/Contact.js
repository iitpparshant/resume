import React, { useState } from 'react'
import "./Contact.css";
import phone from "./phone.svg"
import mail from "./mail.svg"
import location from "./location.jpeg"
import { useNavigate } from 'react-router-dom';

function Contact() {

  const [contactData, setContactData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    summary: '',
  });
let navigate= useNavigate();
  const handleChange = async (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  };

  const submit = async (e) => {
    e.preventDefault();
    const response= await fetch("https://resume-lake-zeta.vercel.app/api/createcontact", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid data");
    }
    if(json.success){
      alert("You have sucessfully submited");
      navigate("/")
    }
  }
  return (
    <div className="contact">
      <h1>Get In Touch With Us</h1>
      <p>If you want to send a massage then you can submit your information in contact form or you can send detail on given mail on contact info page.</p>
      <div className='joint'>
        <form onSubmit={submit}>
          <h2>Send a Massage</h2>
          <div className="name">
            <div className="cent">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="firstname" value={contactData.fname} onChange={handleChange} required />
            </div>
            <div className="cent">
              <label htmlFor="name">Last Name</label>
              <input type="text" id="name" name="lastname" value={contactData.lname} onChange={handleChange} required />
            </div>
          </div>
          <div className="contc">
            <div className="cent">
              <label htmlFor="phone">Phone</label>
              <input type="phone" id="phone" name="phone" value={contactData.phone} onChange={handleChange} required />
            </div>
            <div className="cent">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={contactData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="summary">
            <label htmlFor="message">Why You Want to Contact Us ?</label>
            <textarea id="message" name="summary" rows="5" value={contactData.summary} onChange={handleChange} required></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="me">
          <h2>Contact Info</h2>
          <div className='mai'>
            <div className='pho'>
              <img src={phone} alt="" />
              <h2>9580331223</h2>
            </div>
            <div className="pho">
              <img src={mail} alt="" />
              <h2>parshantverma27.2003@gmail.com</h2>
            </div>
          </div>
          <img className='imag' src={location} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact

// const express= require('express');
// const app= express();
// const port = 5000;
// const cors= require('cors');

// const mongoDB= require('./db');
// mongoDB();
// (async () => {
//     try {
//         await mongoDB();
//         app.listen(port, () => {
//             console.log(`Express server listening on port ${port}`);
//         });
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
//   })();
//   // https://resume-lake-front.vercel.app
//   app.use(cors(
//     {
//         origin:["https://localhost:3000"],
//         methods:["POST","GET"],
//         credentials:true
//     }
//   ));
//   app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });
  
//   app.use(express.json());
//   app.use('/api', require("./Routes/CreateUser"));