import React from "react";
import "./header1.css";
import resumesvg from "../../assets/resume.svg";
function Header() {
    return (
        <div className="container1">
            <div>
                <h1 className="head">A <span>Resume</span> that stands out!</h1>
                <p className="head">Make your own resume. <span>It is free</span></p>
            </div>
            <div className="right">
                <img src={resumesvg} alt="" />
            </div>
        </div>
    );
}
export default Header