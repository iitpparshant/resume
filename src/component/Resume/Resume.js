import React, { forwardRef } from 'react';
import { useState, useEffect ,useRef} from 'react';
import "./Resume1.css";

const Resume=forwardRef((props,ref)=> {

    const information = props.information;
    const sections = props.sections;
    const containerkRef= useRef();

    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")

    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        skill : information[sections.skill],
        summary: information[sections.summary],
        other: information[sections.other],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const [columns, setColumns] = useState([[], []]);

    const sectionDiv = {
        [sections.workExp]: (<div key={"wrokexp"}
            draggable
            onDragOver={() => setTarget(info.workExp?.id)}
            onDragEnd={() => setSource(info.workExp?.id)}
            className={`sectionr ${info.workExp?.sectionTitle ? "" : "hidden"}`}
        >
            <div className="sectionTitle">
                {info.workExp.sectionTitle}
            </div>
            <div className="content">
                {info.workExp?.details?.map((item) => (
                    <div className="item" key={item.title}>
                        {item.title && <p className="title">{item.title}</p>}
                        {item.companyName && <p className="subTitle">{item.companyName}</p>}
                        {item.certificationLink && <a href={item.certificationLink} className="link" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>{item.certificationLink}</a>}
                        {item.startDate && item.endDate ? (
                            <div className="date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>{" "}
                                {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                            </div>
                        ) : (
                            "")}
                        {item.location && (<p className="date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>{item.location}
                        </p>)}
                        {item.points?.length > 0 && (
                            <ul className="points">
                                {item.points?.map((elem, index) => (

                                    <li className="point" key={elem + index}>{elem}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

            </div>
        </div>),
        [sections.project]: (<div key={"project"}
            draggable
            onDragOver={() => setTarget(info.project?.id)}
            onDragEnd={() => setSource(info.project?.id)}
            className={`sectionr ${info.project?.sectionTitle ? "" : "hidden"}`}>
            <div className="sectionTitle">
                {info.project.sectionTitle}
            </div>
            <div className="content">
                {info.project?.details?.map((item) => (

                    <div className="item">
                        {item.title ? (<p className="title">{item.title}</p>) : (" ")}
                        
                        {item.link ? (<a href={item.link} className="link" target="_blank" rel='noopener noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>{item.link}</a>) : ("")}
                        {item.github ? (<a href={item.github} className="link" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>{item.github}</a>) : ("")}
                        {item.overview ? (<p className="overview">{item.overview}</p>) : (" ")}
                        {item.skilluse ? (<p className="overview">Skill Used : {item.skilluse}</p>) : (" ")}
                        {item.points?.length > 0 ? (

                            <ul className="points">
                                {item.points?.map((elem, index) => (

                                    <li className="point" key={elem + index}>{elem}</li>
                                ))}
                            </ul>
                        ) : ("")}
                    </div>
                ))}
            </div>
        </div>),
        [sections.education]: (
            <div key={"education"}
                draggable
                onDragOver={() => setTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
                className={`sectionr ${info.education?.sectionTitle ? "" : "hidden"}`}>
                <div className="sectionTitle">
                    {info.education?.sectionTitle}
                </div>
                <div className="content">
                    {info.education?.details?.map((item, index) => (
                        <div className="item">
                            {item.title ? (<p className="title">{item.title}</p>) : ("")}
                            <div className="collagecpi">
                            {item.college ? (<p className="subTitle">{item.college}</p>) : ("")}
                            {item.cpi ? (<p className="subTitle">{item.cpi[item.cpi.length - 1] === '%' ? 'Percentage' : 'CPI'} : {item.cpi}</p>) : ("")}
                            </div>
                            {item.startDate && item.endDate ? (
                                <div className="date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>{" "}
                                    {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                                </div>
                            ) : (
                                "")}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.achievement]: (
            <div key={"achievement"}
                draggable
                onDragOver={() => setTarget(info.achievement?.id)}
                onDragEnd={() => setSource(info.achievement?.id)}
                className={`sectionr ${info.achievement?.sectionTitle ? "" : "hidden"}`}>
                <div className="sectionTitle">
                    {info.achievement?.sectionTitle}
                </div>
                <div className="content">
                    {info.achievement?.points.length > 0 ? (
                        <ul className="points">
                            {info.achievement?.points?.map((elem, index) => (

                                <li className="point" key={elem + index}>{elem}</li>
                            ))}
                        </ul>
                    ) : ("")}

                </div>
            </div>
        ),
        [sections.summary]: (
            <div key={"summary"}
                draggable
                onDragOver={() => setTarget(info.summary?.id)}
                onDragEnd={() => setSource(info.summary?.id)}
                className={`sectionr ${info.summary?.sectionTitle ? "" : "hidden"}`}>
                <div className="sectionTitle">
                    {info.summary?.sectionTitle}
                </div>
                <div className="content">
                    <p className="overview">
                        {info.summary?.detail}
                    </p>
                </div>
            </div>
        ),
        [sections.skill]: (
            <div key={"skill"}
                draggable
                onDragOver={() => setTarget(info.skill?.id)}
                onDragEnd={() => setSource(info.skill?.id)}
                className={`sectionr ${info.skill?.sectionTitle ? "" : "hidden"}`}>
                <div className="sectionTitle">
                    {info.skill?.sectionTitle}
                </div>
                <div className="content">
                    <p className="overview">
                        {info.skill?.detail}
                    </p>
                </div>
            </div>
        ),
        [sections.other]: (
            <div key={"other"}
                draggable
                onDragOver={() => setTarget(info.other?.id)}
                onDragEnd={() => setSource(info.other?.id)}
                className={`sectionr ${info.other?.sectionTitle ? "" : "hidden"}`}>
                <div className="sectionTitle">
                    {info.other?.sectionTitle}
                </div>
                <div className="content">
                    <p className="overview">
                        {info.other?.detail}
                    </p>
                </div>
            </div>
        )
    }

    const swapSourceTarget=(source,target)=>{
        if(!source || !target){
            return;
        }
        const tempColumns= [[...columns[0]],[...columns[1]]];

        let sourceRowIndex= tempColumns[0].findIndex((item)=> item===source);
        let sourceColumnIndex =0;
        if(sourceRowIndex<0){
            sourceColumnIndex=1;
            sourceRowIndex= tempColumns[1].findIndex((item)=> item===source);
        }

        let targetRowIndex= tempColumns[0].findIndex((item)=> item===target);
        let targetColumnIndex =0;
        if(targetRowIndex<0){
            targetColumnIndex=1;
            targetRowIndex= tempColumns[1].findIndex((item)=> item===target);
        }

        const tempSource= tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex]= tempColumns[targetColumnIndex][targetRowIndex];
        tempColumns[targetColumnIndex][targetRowIndex]= tempSource;
        setColumns(tempColumns);
    }

    useEffect(() => {
        setColumns([
            [sections.project, sections.education,sections.skill, sections.summary],
            [sections.workExp, sections.achievement, sections.other],
        ]);
    }, []);

    useEffect(() => {
        swapSourceTarget(source,target);
    }, [source])

    useEffect(() => {
        const containerk=containerkRef.current;
        if(!props.activeColor|| !containerk){
            return ;
        }
        containerk.style.setProperty("--color", props.activeColor);
    }, [props.activeColor])


    return (
        <div ref={ref}>
        <div ref={containerkRef} className='containerk'>
            <div className="header2">
                <p className="headingR">
                    {info.basicInfo?.detail?.name}
                </p>
                <p className="subHeading">
                    {info.basicInfo?.detail?.title}
                </p>
                <div className="links">
  {info.basicInfo?.detail?.email ? (
    <a href={info.basicInfo?.detail?.email} className="link" target='_blank' rel='noopener noreferrer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      {info.basicInfo?.detail?.email}
    </a>
  ) : ("")}
  {info.basicInfo?.detail?.phone ? (
    <a href={info.basicInfo?.detail?.phone} className="link" target='_blank' rel='noopener noreferrer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      {info.basicInfo?.detail?.phone}
    </a>
  ) : ("")}
  {info.basicInfo?.detail?.linkedin ? (
    <a href={info.basicInfo?.detail?.linkedin} className="link" target='_blank' rel='noopener noreferrer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      {info.basicInfo?.detail?.linkedin}
    </a>
  ) : ("")}
  {info.basicInfo?.detail?.github ? (
    <a href={info.basicInfo?.detail?.github} className="link" target='_blank' rel='noopener noreferrer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      {info.basicInfo?.detail?.github}
    </a>
  ) : ("")}
</div>

            </div>
            <div className="mainrs">
                <div className="col1">{columns[0].map(item => sectionDiv[item])}</div>
                <div className="col2">{columns[1].map(item => sectionDiv[item])}</div>
            </div>
        </div>
        </div>
    )
});

export default Resume