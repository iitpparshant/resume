import React from "react";
import "./header1.css";
import resumesvg from "../assets/resume.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="container1">
            <div>
                <h1 className="head">A <span>Resume</span> that stands out!</h1>
                <p className="head">Make your own resume. <span>It is free</span></p>
                <h1 className="resume">For making your resume click on the below button</h1>
                <Link className="click" to="/body">Click Here</Link>
            </div>
            <div className="right">
                <img src={resumesvg} alt="" />
            </div>
        </div>
    );
}
export default Header