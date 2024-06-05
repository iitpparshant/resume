import './App.css';
import React from "react";
import Header from "./component/header/header";
import Body from "./component/Body/Body";
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './component/Signin/Signin';
import Signup from './component/Signup/Signup';
import Contact from './component/Contact/Contact';
// import Resume from './component/Resume/Resume';
function App() {
  return (
    <Router>
      <div className="App">
        {<Navbar/>}
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Header />} />
          <Route path="/body" element={<Body />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Header/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
