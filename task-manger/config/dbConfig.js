const mongoose = require('mongoose');
const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://guvi:guvi123@cluster0.g2kyq.mongodb.net/");
        console.log("Connected to MongoDB");
    }   catch(error){
        console.log("Error connecting to MongoDB", error);
    }
};
module.exports = connectDB;