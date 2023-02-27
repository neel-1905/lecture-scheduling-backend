const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/users");
const courseRoute = require("./routes/courses");
const lectureRoute = require("./routes/lectures");

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/users", userRoute);
app.use("/courses", courseRoute);
app.use("/lectures", lectureRoute);

const connection = async () => {
  mongoose.connect(process.env.MONGO, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to Database");
  });
};

app.listen(process.env.SERVER || port, () => {
  connection();
  // console.log(`App started on ${port}`);
  console.log(`App started`);
});
