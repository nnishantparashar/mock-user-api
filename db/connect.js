const mongoose = require("mongoose");
//var mongoURL = process.env.MONGO_URL;

//mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

exports.db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB is connected")
    } catch(error){
        console.log("Error while connecting DB: ", error);
    }
    
};