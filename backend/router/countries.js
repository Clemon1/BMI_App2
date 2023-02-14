const router = require("express").Router();
const countries = require("../models/countries");

// all countries
router.get("/", async (req, res) => {
  const allCountries = await countries.find();
  res.status(200).json(allCountries);
});

module.exports = router;
