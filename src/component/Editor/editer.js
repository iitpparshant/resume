import React from "react";
import "./editor1.css"
function Editor(props) {
    const sections= props.sections;
    return (
        <div className="container">
            <div className="header">
                {Object.keys(sections)?.map((key)=>(
                    <div className="section" key= {key}>
                        {sections[key]}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Editor;