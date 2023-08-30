const express = require("express");
const {
  home,
  createTodo,
  showTodo,
  editTodo,
  deleteTodo,
} = require("../controller/todoController");
const {
  createTask,
  editTask,
  deleteTask,
  showTask,
  showAllTask,
} = require("../controller/taskController");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/showTodo", showTodo);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);

router.get("/showAllTask", showAllTask);
router.get("/showTask/:id", showTask);
router.post("/createTask/:id", createTask);
router.put("/editTask/:id", editTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
