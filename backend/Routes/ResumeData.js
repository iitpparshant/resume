const express= require('express');
const Resume= require('../modles/Data');
const router = express.Router();

function transformResumeData(data) {
    return {
        email:data.email|| '',
        resumeData:[{basicInfo: {
            name: data.information['Basic Info']?.detail?.name || '',
            title: data.information['Basic Info']?.detail?.title || '',
            linkedin: data.information['Basic Info']?.detail?.linkedin || '',
            github: data.information['Basic Info']?.detail?.github || '',
            phone: data.information['Basic Info']?.detail?.phone || '',
            email: data.information['Basic Info']?.detail?.email || ''
        },
        workExp: data.information['Work Experience']?.details?.map(detail => ({
            title: detail.title || '',
            companyName: detail.companyName || '',
            certificationLink: detail.certificationLink || '',
            location: detail.location || '',
            startDate: detail.startDate || null,
            endDate: detail.endDate || null,
            points: detail.points || []
        })) || [],
        projects: data.information['Projects']?.details?.map(detail => ({
            title: detail.title || '',
            overview: detail.overview || '',
            skilluse: detail.skilluse || '',
            link: detail.link || '',
            github: detail.github || '',
            points: detail.points || []
        })) || [],
        education: data.information['Education']?.details?.map(detail => ({
            title: detail.title || '',
            cpi: detail.cpi || '',
            college: detail.college || '',
            startDate: detail.startDate || null,
            endDate: detail.endDate || null
        })) || [],
        achievements: data.information['Achievements']?.points || [],
        skills: data.information['Skill']?.detail?.split(',') || [],
        summary: data.information['Summary']?.detail || '',
        other: data.information['Other']?.detail || ''}]
    };
}


router.post('/resumedata', async(req,res)=>{
    try {
        const data = req.body;
        console.log("Received data:", data);  // Log the incoming data for debugging

        const transformedData = transformResumeData(data);
        console.log("Transformed data:", transformedData);  // Log the transformed data for debugging

        const newResume = new Resume(transformedData);
        console.log("New Resume instance:", newResume); // Log the new instance for debugging

        const existingResume = await Resume.findOne({ email: transformedData.email });
        // console.log("helloe",existingResume)

        if (existingResume) {
            // Update the existing resume
            existingResume.resumeData = transformedData.resumeData;
            await existingResume.save();
            return res.status(200).json({ message: 'Resume data updated successfully', data: existingResume });
        } else {
            // Create a new resume
            const newResume = new Resume(transformedData);
            console.log("New Resume instance:", newResume); // Log the new instance for debugging

            await newResume.save();
            return res.status(201).json({ message: 'Resume data saved successfully', data: newResume });
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})

router.get('/comeresumedata',async(req,res)=>{
    try {
        const email = req.query.email;
        const resume = await Resume.find();
        console.log(resume)
        return res.status(200).json(resume);
    } catch (err) {
        console.error("Error fetching resume data:", err);  // Log the error for debugging
        return res.status(500).json({ message: err.message });
    }
})

module.exports = router;