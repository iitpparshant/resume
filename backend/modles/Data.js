const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResumeSchema = new Schema({
    email: { type: String, required: true },
    resumeData:[{
    basicInfo: [
        {
            name: { type: String },
            title: { type: String },
            linkedin: { type: String },
            github: { type: String },
            phone: String,
            email: String
        }
    ]
    ,
    workExp: [
        {
            title: String,
            companyName: String,
            certificationLink: String,
            location: String,
            startDate: Date,
            endDate: Date,
            points: [String]
        }
    ],
    projects: [
        {
            title: String,
            overview: String,
            skilluse: String,
            link: String,
            github: String,
            points: [String]
        }
    ],
    education: [
        {
            title: String,
            cpi: String,
            college: String,
            startDate: Date,
            endDate: Date
        }
    ],
    achievements: [String],
    skills: [String],
    summary: String,
    other: String}]
});

module.exports = mongoose.model('Resume', ResumeSchema);
