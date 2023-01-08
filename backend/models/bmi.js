const mongoose = require("mongoose");
const bmiSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    country: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    bmiNumber: {
      type: String,
    },
    messages: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
const bmiCalc = mongoose.model("bmi", bmiSchema);
module.exports = bmiCalc;
