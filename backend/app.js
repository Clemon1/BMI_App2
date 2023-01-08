const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const authRouter = require("./router/auth");
const bmiCalcRouter = require("./router/bmiRouter");
// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => console.log("Error in database connection"));
db.once("open", () => console.log("BMI Database connected"));

//  Global Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("BMI APP");
});
app.use("/bmi", authRouter);
app.use("/app", bmiCalcRouter);
app.listen(PORT, () => {
  console.log(`BMI app connected to port ${PORT}`);
});
