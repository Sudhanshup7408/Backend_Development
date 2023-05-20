//Importing the model
const Todo = require("../model/Todos");

//Define the route handler
exports.createTodo = async(req,res) =>{
    try {
          //extract the content from the body
          const {title,description} = req.body;

          //create a new todo resource
          const response = await Todo.create({title,description});

          //send a json response
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Data created successfully',
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
        )
    }
}