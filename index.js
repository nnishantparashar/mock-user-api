require("dotenv").config();

const express = require("express");
const {db} = require("./db/connect");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use(userRoutes);

//Connection DB
db();




app.listen(PORT, () => console.log("Server listening on port: ", PORT));