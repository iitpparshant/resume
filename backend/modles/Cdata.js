const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true},
    summary: { type: String, required: true}
});

const ContactModel = mongoose.model('Cdata', ContactSchema);

module.exports = ContactModel;