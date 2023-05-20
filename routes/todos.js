const express = require('express');
const router = express.Router();

//NOw import the controller for the router 
const {createTodo} = require("../controller/createTodos");
const {getTodos,getTodosById} = require("../controller/getTodos");
const {updateTodos} = require("../controller/updateTodos");

//define the api route for the all the route
router.post("/createTodo",createTodo);
router.get("/getall",getTodos);
router.get("/getall/:id",getTodosById);
router.put("/updateTodos/:id",updateTodos);

module.exports = router;