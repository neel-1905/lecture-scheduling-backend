const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;

const cors = require("cors");

const userRoute = require("./routes/users");
const courseRoute = require("./routes/courses");
const lectureRoute = require("./routes/lectures");

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/courses", courseRoute);
app.use("/lectures", lectureRoute);

const connection = async () => {
  mongoose.connect(
    "mongodb+srv://neel1905:neel1905@cluster0.2mdg4wr.mongodb.net/lectureapp?retryWrites=true&w=majority",
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Connected to Database");
    }
  );
};

app.listen(port, () => {
  connection();
  // console.log(`App started on ${port}`);
  console.log(`App started`);
});
