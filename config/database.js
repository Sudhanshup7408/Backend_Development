const mongoose = require('mongoose');

//To create the env object for the process\
require('dotenv').config();

//To making the connnection to the database along using the env object
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    //Checking the promise of the connnection
    .then(()=>{
        console.log("Connection to the database is success.")
    })
    //Trying to get the error messagee of the connection
    .catch((error)=>{
        console.log("OOPs connenction missed.")
        console.error(error.message);
        //DON'T know what is this
        process.exit(1);
    })
}

//To make it use outside the file we need to export the module
module.exports = dbConnect;