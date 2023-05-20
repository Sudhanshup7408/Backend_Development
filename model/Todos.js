const mongoose = require('mongoose');

//Creating the schema for the todos basically it is the structure of the content
const todoschema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
           type:Date,
           required:true,
           default:Date.now(), 
        }
    }
);

//Exporting this for the usable for the whole
module.exports = mongoose.model("TODO",todoschema);