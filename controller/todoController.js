const Todo = require("../model/todoModel");

exports.home = async (req, res) => {
  res.send("Todo App Work Proper");
};

exports.createTodo = async (req, res) => {
  try {
    const { title, task } = req.body;

    // Check if title is empty
    if (!title || !task) {
      throw new Error("Title is Required");
    }

    // Check in database if title is unique or not
    const isUnique = await Todo.findOne({ title });
    if (isUnique) {
      throw new Error("Title is already in database");
    }

    //add in database
    const todo = await Todo.create({ title, task });
    res.status(200).json({
      success: true,
      message: "Title Added Successfully",
      todo,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.showTodo = async (req, res) => {
  try {
    const titles = await Todo.find();
    res.status(200).json({
      success: true,
      titles,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Title Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Title Deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
