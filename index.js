//Need a xpress to run and start a server
const express = require("express");
const app = express();

//Need port no details from the env so we ned to load that also
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Need middleware for the parsing of the data 
app.use(express.json());

//Need to import the routs from the routes folder
const todoRoutes = require("./routes/todos");

//Need to mount the routes for the further changes required we can do that also in seconds
app.use("/api/v1",todoRoutes);

//Need to start the server and listend something
app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`);
})

//Connec the database finally
const dbConnect = require("./config/database");
dbConnect();


//Need to give the default route to this
// app.get("/",(req,res)=>{
//     res.send(`<h1>This is the homepage</h1>`);
// })