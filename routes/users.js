const express = require("express");
const {
  register,
  login,
  getAll,
  getAllUserLectures,
} = require("../controllers/users");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getAll", verifyToken, getAll);
router.get(
  "/getAllUserLectures/:instructorId",
  verifyToken,
  getAllUserLectures
);

module.exports = router;
