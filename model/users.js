const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        
        name: {type: String, required:true, trim: true},
        username: {type: String, required:true, trim: true},
        email: {type: String, unique:true, required:true, trim: true},
        address: {type: String, required:true, trim: true},
        phone: {type: String, unique:true, required:true, trim: true},
        website: {type: String, required:true, trim: true},
        company: {type: String, required:true, trim: true},
        
    }
);

const usersSchemaModel = mongoose.model("mockUser", usersSchema);

module.exports = usersSchemaModel;