require("dotenv").config();

const express = require("express");
const {db} = require("./db/connect");
const userRoutes = require("./routes/userRoute");
const app = express();
require("dotenv").config();
const PORT = 8000;
app.use(express.json());
app.use("/v1",userRoutes);

//Connection DB
db();

// var db = mongoose.connection;
// db.on("connected",() =>{
//     console.log("MongoDB is connected");
// });
// db.on("error",() =>{
//     console.log("MongoDB is connection failed");
// });



app.listen(PORT, () => console.log("Server listening on port: ", PORT));