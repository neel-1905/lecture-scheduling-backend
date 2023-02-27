const express = require("express");
const { createCourse, getAll } = require("../controllers/courses");
const router = express.Router();

router.post("/createCourse", createCourse);
router.post("/login");
router.get("/getAll", getAll);

module.exports = router;
