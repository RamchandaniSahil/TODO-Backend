const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is Required"],
    unique: true,
    maxlength: [25, "Title must be 25 character long"],
  },
  task: {
    type: [String],
    // unique: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
// Add date field and short acording to the date
