import React from "react";
import "./Body1.css"
import Editor from "../Editor/editer"
function Body() {
    const colors= ["red","yellow","green","black","blue"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
    return (
        <div className="container">
            <p className="heading">Resume Builder</p>
            <div className="toolbar">
                <div className="colors">
                    {colors.map((item)=>(
                    <span key={item} style={{backgroundColor: item}} className="color">

                    </span>
                    ))}
                </div>
               <button >Download <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>                </button>
            </div>
            <di className="main">
                <Editor sections={sections}/>
            </di>
        </div>
    );
}
export default Body