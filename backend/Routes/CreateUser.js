const express = require('express');
const router = express.Router();
const User = require('../modles/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')
const jwtSecret= "asdfghjklmnbvcxzqwertyuiop"

router.post("/createuser", [
    check('email').isEmail(),
    check('name').isLength({ min: 5 }),
    check('password', 'Incorrect Password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const salt= await bcrypt.genSalt(10);
        let setPassword= await bcrypt.hash(req.body.password,salt);
        try {
            const {name,password,email, gender}=req.body;
            const newUser = await User.create({
                name: req.body.name,
                password: setPassword,
                email: req.body.email,
                gender: req.body.gender,
            });
            res.json({ success: true, user: newUser });
        } catch (error) {
            console.error(error);
            res.json({ success: false, error: error.message });
        }
    }
)


router.post("/loginuser", [
    check('email').isEmail(),
    check('password', 'Incorrect Password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        let email= req.body.email;
        try {
            let userData= await User.findOne({email});
            if(!userData){
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const pwdCompare= await bcrypt.compare(req.body.password, userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken= jwt.sign(data,jwtSecret)

            return res.json({ success: true ,authToken:authToken});
        } catch (error) {
            console.error(error);
            res.json({ success: false, error: error.message });
        }
    }
)


module.exports = router;