const mongoose = require("mongoose");
const countriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const countries = mongoose.model("countries", countriesSchema);

module.exports = countries;
