const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResumeSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    resume_data: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('Resume', ResumeSchema);
