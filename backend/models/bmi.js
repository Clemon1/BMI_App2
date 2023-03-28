const mongoose = require("mongoose");
const bmiSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "countries",
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
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
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
