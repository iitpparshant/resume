const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoDB = require('./db');

// Initialize MongoDB connection
(async () => {
    try {
        await mongoDB();
        app.listen(port, () => {
            console.log(`Express server listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();
  // https://resume-lake-front.vercel.app
//   http://localhost:3000
// Set up CORS
app.use(cors({
    origin: ["https://resume-lake-front.vercel.app"], // corrected to http
    methods: ["POST", "GET"],
    credentials: true
}));

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/ContactData"));
app.use('/api', require("./Routes/ResumeData"));

module.exports = app;
