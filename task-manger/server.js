const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());

//connect to mongoDB
connectDB();

//Routes
app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});