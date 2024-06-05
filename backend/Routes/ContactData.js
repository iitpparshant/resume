const express = require('express')
const router = express.Router();
const Cdata = require('../modles/Cdata');

router.post('/createcontact', async (req, res) => {
  try {
    const {firstname, lastname, phone, email, summary} = req.body;
    const newContact = await Cdata.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      summary: req.body.summary,
    });
    res.json({ success: true ,contact: newContact });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
})

module.exports = router;