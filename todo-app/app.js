const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const { Todo } = require("./models")

app.get("/todos", (request, response) => {
    try {
        const todos = await Todo.findAll();
        return response.json(todos);
    } catch (error) {
        console.log(error);
        return response.status(422).json({ error: "Internal Server Error" });
    }
});

app.post("/todos", async (request, response) => {
    console.log("Creating a todo",request.body)
    try {
        const todo = Todo.addTodo({ title: request.body.title, dueDate: request.body.dueDate, completed: false })
        return response.json(todo)
    } catch (error){
        console.log(error)
        return response.status(422).json(error)
    }
})

app.put("/todo/:id/markAsCompleted" , async (request, response) => {
    console.log("We have to update a todo ID",request.params.id)
    const todo = await Todo.findByPk(request.params.id)
    try {
        const updatedtodo = await Todo.markAsCompleted()
        return response.json(updatedtodo)
    } catch (error) {
        console.log(error)
        return response.status(422).json(error)
    }
})

app.delete("/todo/:id" , (request, response) => {
    const loggedInUser = request.user.id;
    console.log("We have to delete a todo with ID: ", request.params.id);
    try {
      const status = await Todo.remove(request.params.id, loggedInUser);
      return response.json(status ? true : false);
    } catch (err) {
      return response.status(422).json(err);
    }
  }
);

module.exports = app;