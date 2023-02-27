const Lecture = require("../models/Lecture");

const createLecture = async (req, res) => {
  const { courseId, instructorId } = req.params;
  const { subject, date } = req.body;

  const newLecture = new Lecture({
    courseId,
    instructorId,
    subject,
    date,
  });

  await newLecture.save();

  return res.json({ message: "New lecture created", isSuccess: true });
};

module.exports = { createLecture };
