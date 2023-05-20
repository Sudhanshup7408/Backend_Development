//Importing the model
const Todo = require("../model/Todos");

//Define the route handler
exports.updateTodos = async(req,res) =>{
    try {
          //update code to update a resource
          const {id} = req.params;
          const {title, description} = req.body;

          const todo = await Todo.findByIdAndUpdate({_id:id},{
            title,description, updatedAt:Date.now()
          })
          res.status(200).json({
            status:true,
            data:todo,
            message:"Updated Successfully"
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
        )
    }
}