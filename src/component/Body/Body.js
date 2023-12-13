import React from "react";
import { useState,useEffect } from "react";
import "./Body1.css"
import Editor from "../Editor/editer"
import Resume from "../Resume/Resume";
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
      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

      useEffect(() => {
        console.log(resumeInformation);
      }, [resumeInformation])
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
               <button >Download <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
            </div>
            <div className="main">
                <Editor sections={sections} information= {resumeInformation} setInformation={setResumeInformation}/>
                <Resume/>
            </div>
        </div>
    );
}
export default Body