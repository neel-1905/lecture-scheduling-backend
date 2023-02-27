const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseLevel: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  // lectures: {
  //   type: Array,
  //   default: [],
  // },
});

const Course = mongoose.model("courses", CourseSchema);

module.exports = Course;
