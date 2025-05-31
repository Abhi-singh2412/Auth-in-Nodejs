const mongoose = require('mongoose');

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://abhisinghind90:Abhisingh24@cluster0.mvbbxpc.mongodb.net/");
        console.log("Mongo db connected sucessfully");

        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }

};

module.exports = connectToDb;
