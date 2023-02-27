const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Lecture = require("../models/Lecture");

const register = async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    return res.status(200).json({ message: "User has been created!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Wrong username or password!" });
  }

  const token = jwt.sign(
    { id: user?._id, isAdmin: user?.isAdmin },
    process.env.SECRET
  );

  //   let { password, isAdmin, ...otherDetails } = user._doc;

  return res.status(200).json({
    message: "User Logged in !",
    role: user.role,
    username: user.username,
    id: user?._id,
    token,
    isSuccess: true,
  });
};

const getAll = async (req, res) => {
  const users = await User.find({}, "-password, -role ");

  if (!users) {
    return res.json({ message: "Users not found", isSuccess: false });
  }

  return res.json({ message: "Users found", users, isSuccess: true });
};

const getAllUserLectures = async (req, res) => {
  const { instructorId } = req.params;

  const lectures = await Lecture.find({ instructorId });

  if (!lectures) {
    return res.json({ message: "No lectures found", isSuccess: false });
  }

  return res.json({ message: "Lectures found", lectures, isSuccess: true });
};

module.exports = { register, login, getAll, getAllUserLectures };
