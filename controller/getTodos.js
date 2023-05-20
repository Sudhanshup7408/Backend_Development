const Todo = require("../model/Todos");


exports.getTodos = async(req,res) =>{
    try {
           const todos = await Todo.find({});
           res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'Entire data is Fetched',
                }
            )
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message,

            }   
        );
    }
}

exports.getTodosById = async(req,res) =>{
    try {
        //extract the data from the databases
        const id = req.params.id;
        const todo = await Todo.find({_id:id})

        //checking for the data if found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found for the given Id"
                
            })
        }
        //If the data is found
        res.status(200).json({
            suceess:true,
            data:todo,
            message:`Data by ${id} is here`
        })
 } catch (error) {
     console.error(error);
     console.log(error);
     res.status(500).json(
         {
             success:false,
             data:"Internal server error",
             message:error.message,

         }   
     );
 }
}