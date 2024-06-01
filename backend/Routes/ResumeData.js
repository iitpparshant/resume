const express= require('express');
const Data= require('../modles/Data');
const router = express.Router();

router.post('/resumeData', async(req,res)=>{
    let data= req.body.resume_data;
})