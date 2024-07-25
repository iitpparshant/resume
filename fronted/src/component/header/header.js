import React from "react";
import "./header1.css";
import resumesvg from "../assets/resume.svg";
import clone from "../assets/clone.jpeg"
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.gif"
function Header() {
    return (
        <div className="header">
            <div className="container1">
                <div className="cont">
                    <h1 className="head">A <span>Resume</span> that stands out!</h1>
                    <p className="head">Make your own resume. <span>It is free</span></p>
                    <h1 className="resume">For making your resume click on the below button</h1>
                    <div className="arrowclick">
                        <img className="arrow" alt="" src={arrow} />
                        <Link className="click" to="/body">Click Here</Link>
                    </div>
                </div>
                <div className="right">
                    <img src={resumesvg} alt="" />
                </div>
            </div>
            <div className="templet">
                <h1>STUDENT RESUME TEMPLET</h1>
                <img src={clone} alt="" />
            </div>
        </div>
    );
}
export default Header