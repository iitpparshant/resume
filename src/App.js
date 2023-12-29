import './App.css';
import React from "react";
import Header from "./component/header/header";
import Body from "./component/Body/Body";
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Header/> */}
      {/* <Body/> */}
      <Footer/>
    </div>
  );
}

export default App;
