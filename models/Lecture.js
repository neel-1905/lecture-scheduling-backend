const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Types.ObjectId,
  },
  courseId: {
    type: mongoose.Types.ObjectId,
  },
  subject: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Lecture = mongoose.model("lectures", LectureSchema);

module.exports = Lecture;
