const express= require('express');
const app= express();
const port = 5000;
const cors= require('cors');

const mongoDB= require('./db');
mongoDB();
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

  app.use(cors(
    {
        origin:["https://resume-lake-zeta.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
  ));
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.use(express.json());
  app.use('/api', require("./Routes/CreateUser"));