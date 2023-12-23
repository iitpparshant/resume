import React from "react";
import { useState, useEffect } from "react";
import "./editor1.css";
import Inputcontrol from "../InputControl/Inputcontrol";

function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    );

    const [activeDetailIndex, setActiveDetailIndex] = useState(0)

    const [values, setValues] = useState(
        {
            name: activeInformation?.details?.name || "",
            title: activeInformation?.detail?.title || "",
            linkedin: activeInformation?.detail?.linkedin || "",
            github: activeInformation?.detail?.github || "",
            phone: activeInformation?.detail?.phone || "",
            email: activeInformation?.detail?.email || "",
        }
    );

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    };

    const workExpBody = (
        <div className="detail">
            <div className="row">
                <Inputcontrol
                    label="Title"
                    placeholder="Enter title eg. Fronted developer"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
                <Inputcontrol
                    label="Company Name"
                    placeholder="Enter Company Name eg. Flipkart"
                    value={values.companyName}
                    onChange={(event) => setValues((prev) => ({ ...prev, companyName: event.target.value }))}
                />
            </div>
            <div className="row">
                <Inputcontrol
                    label="Certificate Link"
                    placeholder="Enter Certificate link "
                    value={values.certificationLink}
                    onChange={(event) => setValues((prev) => ({ ...prev, certificationLink: event.target.value }))}
                />
                <Inputcontrol
                    label="Location"
                    placeholder="Enter Location eg. remote"
                    value={values.location}
                    onChange={(event) => setValues((prev) => ({ ...prev, location: event.target.value }))}
                />
            </div>
            <div className="row">
                <Inputcontrol
                    label="Start date"
                    type='date'
                    placeholder="Enter Start date of work"
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
                <Inputcontrol
                    label="End date"
                    type='date'
                    placeholder="Enter End date of work"
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>
            <div className="column">
                <label htmlFor="">Enter work Description</label>
                <Inputcontrol
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <Inputcontrol
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <Inputcontrol
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );

    const projectBody = (
        <div className="detail">
            <div className="row">
                <Inputcontrol
                    label="Title"
                    placeholder="Enter title like Flipcart app"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>
            <Inputcontrol
                label="Overview"
                placeholder="Enter Overview like Flipcart app"
                value={values.overview}
                onChange={(event) => setValues((prev) => ({ ...prev, overview: event.target.value }))}
            />
            <div className="row">
                <Inputcontrol
                    label="Deployed link"
                    placeholder="Enter Deployed link of Flipcart app"
                    value={values.link}
                    onChange={(event) => setValues((prev) => ({ ...prev, link: event.target.value }))}
                />
                <Inputcontrol
                    label="Github link"
                    placeholder="Enter Github link of Flipcart app"
                    value={values.github}
                    onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
                />
            </div>
            <div className="column">
                <label htmlFor="">Enter Project Description</label>
                <Inputcontrol
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <Inputcontrol
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <Inputcontrol
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <Inputcontrol
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className="detail">
            <div className="row">
                <Inputcontrol
                    label="Name"
                    placeholder="Enter Name eg. Parshant Verma"
                    value={values.name}
                    onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                />
                <Inputcontrol
                    label="Title"
                    placeholder="Enter title eg. Fronted developer"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>
            <div className="row">
                <Inputcontrol
                    label="Linkedin Link"
                    placeholder="Enter Linkedin Link eg. Fronted developer"
                    value={values.linkedin}
                    onChange={(event) => setValues((prev) => ({ ...prev, linkedin: event.target.value }))}
                />
                <Inputcontrol
                    label="Github link"
                    placeholder="Enter Github link eg. Fronted developer"
                    value={values.github}
                    onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
                />
            </div>
            <div className="row">
                <Inputcontrol
                    label="Email"
                    placeholder="Enter Email eg. Fronted developer"
                    value={values.email}
                    onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                />
                <Inputcontrol
                    label="Phone No."
                    placeholder="%Enter Phone No. eg. Fronted developer"
                    value={values.phone}
                    onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className="detail">
            <div className="row">
                <Inputcontrol
                    label="Title"
                    placeholder="Enter title eg. B.etch"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
                <Inputcontrol
                    label="CPI / Percentage(%)"
                    placeholder="Enter eg. 8.5 or 90%"
                    value={values.cpi}
                    onChange={(event) => setValues((prev) => ({ ...prev, cpi: event.target.value }))}
                />
            </div>
            <Inputcontrol
                label="Collage/School Name"
                placeholder="Enter Collage/School Name"
                value={values.college}
                onChange={(event) => setValues((prev) => ({ ...prev, college: event.target.value }))}
            />
            <div className="row">
                <Inputcontrol
                    label="Start date"
                    type='date'
                    placeholder="Enter Start date of work"
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
                <Inputcontrol
                    label="End date"
                    type='date'
                    placeholder="Enter End date of work"
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className="detail">
            <div className="column">
                <label htmlFor="">List your achievements</label>
                <Inputcontrol
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <Inputcontrol
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <Inputcontrol
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <Inputcontrol
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const skillBody = (
        <div className="detail">
            <Inputcontrol
                label="Skill"
                placeholder="Enter skill like c++"
                value={values.skill}
                onChange={(event) => setValues((prev) => ({ ...prev, skill: event.target.value }))}
            />
        </div>
    );

    const summaryBody = (
        <div className="detail">
            <Inputcontrol
                label="Summary"
                placeholder="Enter Summary e"
                value={values.summary}
                onChange={(event) => setValues((prev) => ({ ...prev, summary: event.target.value }))}
            />
        </div>
    );

    const otherBody = (
        <div className="detail">
            <Inputcontrol
                label="Other"
                placeholder="Enter Something"
                value={values.other}
                onChange={(event) => setValues((prev) => ({ ...prev, other: event.target.value }))}
            />
        </div>
    );

    const GenerateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.skill:
                return skillBody
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    }

    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                }
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                }
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    cpi: values.cpi,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                }
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.achievement: {
                const tempPoints = values.points;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.achievement]: {
                        ...prev[sections.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.skill: {
                const tempSkill= values.skill;
                props.setInformation((prev)=>({
                    ...prev,
                    [sections.skill]:{
                        ...prev[sections.skill],
                        detail:tempSkill,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.other: {
                const tempDetail = values.other;
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
        }
    }

    const handleAddNew = () => {
        const details = activeInformation?.details
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({});
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex(details?.length - 1);
    }

    const handleDeleteDetail = (index) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";
        if (!details) return;
        details.splice(index, 1);
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    }

    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ""
                : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ""
                : "",
            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : "",
            college: activeInfo?.details
                ? activeInfo.details[0]?.college || ""
                : "",
            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : "",
            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : "",
            endDate: activeInfo?.details
             ? activeInfo.details[0]?.endDate || ""
              : "",
            cpi: activeInfo?.details
             ? activeInfo.details[0]?.cpi || ""
              : "",
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",
            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            skill : typeof activeInfo?.detail !=="object"?activeInfo.detail :"",
            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
            other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        })
    }, [activeSectionKey]);

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
        // console.log(information);
    }, [information])

    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) {
            return;
        }
        const activeInfo = information[sections[activeSectionKey]];
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            link: activeInfo.details[activeDetailIndex]?.link || "",
            certificationLink:
                activeInfo.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            cpi: activeInfo.details[activeDetailIndex]?.cpi ||"",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            college: activeInfo.details[activeDetailIndex]?.college || "",

        })
    }, [activeDetailIndex])

    return (
        <div className="containerp">
            <div className="header">
                {Object.keys(sections)?.map((key) => (
                    <div
                        className={`section ${activeSectionKey === key ? 'active' : ''
                            }`}
                        key={key}
                        onClick={() => setActiveSectionKey(key)}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>
            <div className="body1">
                <Inputcontrol label="Title"
                    placeholder="Enter section title"
                    value={sectionTitle}
                    onChange={(event) => setSectionTitle(event.target.value)}
                />

                <div className="chips">
                    {activeInformation?.details
                        ? activeInformation?.details?.map((item, index) => (
                            <div className={` chip  ${activeDetailIndex === index ? 'active' : ""}`} key={item.title + index} onClick={() => setActiveDetailIndex(index)}>
                                <p>{sections[activeSectionKey]} {index + 1}</p>
                                <svg onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteDetail(index);
                                }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                        ))
                        : ""}
                    {activeInformation?.details &&
                        activeInformation?.details?.length > 0 ? (
                        <div className="new" onClick={handleAddNew}>+New</div>
                    ) : (
                        ""
                    )}

                </div>
                {GenerateBody()}

                <button onClick={handleSubmission}>Save</button>
            </div>
        </div>
    );
}

export default Editor;
