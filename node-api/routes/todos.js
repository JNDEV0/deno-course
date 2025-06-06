const express = require("express");
const router = express.Router();

let todos = [];

router.get("/todos", (req, res, next) => {
  res.json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo = { id: new Date().toISOString(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({ message: "todo created", todo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
  res.status(200).json({ message: "todo updated", todo: todos[todoIndex] });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const todoId = req.params.todoId;
  todos = todos.filter((todo) => todo.id !== todoId);
  res.status(200).json({ message: `todo id ${todoId} deleted`, todos: todos });
});

module.exports = router;
