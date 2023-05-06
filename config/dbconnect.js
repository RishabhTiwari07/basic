const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionOptions = {}
        await mongoose.connect("mongodb://localhost:27017/testing1",connectionOptions);
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;