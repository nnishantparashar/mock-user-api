const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        id: {type: Number, unique:true, required:true, trim: true},
        name: {type: String, required:true, trim: true},
        username: {type: String, required:true, trim: true},
        email: {type: String, unique:true, required:true, trim: true},
        address: {
        street: {type: String, required:true, trim: true},
        suite: {type: String, required:true, trim: true},
        city: {type: String, required:true, trim: true},
        zipcode: {type: String, required:true, trim: true},
        geo: {
            lat: {type: String, required:true, trim: true},
            lng: {type: String, required:true, trim: true}
        }
        },
        phone: {type: String, unique:true, required:true, trim: true},
        website: {type: String, required:true, trim: true},
        company: {
        name: {type: String, required:true, trim: true},
        catchPhrase: {type: String, required:true, trim: true},
        bs: {type: String, required:true, trim: true}
        }
    }
);

const usersSchemaModel = mongoose.model("mockUser", usersSchema);

module.exports = usersSchemaModel;