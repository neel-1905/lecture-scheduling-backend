const express = require("express");
const { createLecture } = require("../controllers/lectures");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.post(
  "/createLecture/:courseId/:instructorId",
  verifyToken,
  createLecture
);

module.exports = router;
