const Todo = require("../model/todoModel");

// Show all task
exports.showAllTask = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Show Task
exports.showTask = async (req, res) => {
  const todoId = await Todo.findById(req.params.id);

  const tasks = await Todo.findById(todoId);
  const task = tasks.task;
  res.status(200).json({
    success: true,
    task,
  });
};

// Create Task
exports.createTask = async (req, res) => {
  try {
    const todoId = await Todo.findById(req.params.id);
    const { task } = req.body;
    const tasks = await Todo.updateMany({ _id: todoId }, { $push: { task } });
    res.status(200).json({
      success: true,
      message: "Task Added Successfully",
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

// Edit Task
exports.editTask = async (req, res) => {
  try {
    const todoId = await Todo.findById(req.params.id);
    const { index, new_value } = req.body;
    const update = {};
    update[`task.${index}`] = new_value;

    const task = await Todo.updateOne({ _id: todoId }, { $set: update });
    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
      task,
    });
  } catch (error) {
    console.log(error);
  }
};

// Dekete Task
exports.deleteTask = async (req, res) => {
  try {
    console.log("TODO = ", Todo);
    const todoId = await Todo.findById(req.params.id);
    const { value } = req.body;
    const task = await Todo.updateOne(
      { _id: todoId },
      { $pull: { task: `${value}` } }
    );
    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
      value,
      task,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
    });
    console.log(error);
  }
};
