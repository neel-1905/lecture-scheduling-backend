const Course = require("../models/Course");

const createCourse = async (req, res) => {
  const { courseName, courseLevel, courseDescription } = req.body;

  const newCourse = new Course({
    courseName,
    courseLevel,
    courseDescription,
  });

  await newCourse.save();

  return res.json({ message: "New Course Added", isSuccess: true });
};

const getAll = async (req, res) => {
  const courses = await Course.find();

  if (!courses) {
    return res.json({ message: "Courses not found" });
  }

  return res.json({ message: "Courses found", courses });
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById({ id });

  if (!course) {
    return res.json({ message: "Courses not found" });
  }

  return res.json({ message: "Courses found", course });
};

module.exports = { createCourse, getAll };
