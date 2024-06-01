const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://resume:2101cb41@cluster1.3cijdca.mongodb.net/resume?retryWrites=true&w=majority&appName=Cluster1';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        // const sampleCollection = mongoose.connection.db.collection("user");
        // // console.log("Retrieving data from 'users' collection...");
        // try {
        //     const sampleData = await sampleCollection.find({}).toArray();
        //     global.sample = sampleData;
        //     // console.log(global.sample);
        // } catch (findError) {
        //     console.error("Error during find operation:", findError);
        // }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDB;
