const router = require("express").Router();
const bmiCalc = require("../models/bmi");
const user = require("../models/users");

// Getting a user bmi data
router.get("/bmi/all", async (req, res) => {
  const filterCountry = req.query.country;
  filterCountry.length <= 0
    ? (allbmi = await bmiCalc
        .find()
        .populate("userId")
        .populate("country")
        .exec())
    : (allbmi = await bmiCalc
        .find({ country: { $in: filterCountry } })
        .populate("userId")
        .populate("country")
        .exec());

  res.status(200).json(allbmi);
});

// single User BMI
router.get("/bmi/all/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentUser = await user.findById(id);

    const findBMI = await bmiCalc
      .find({ userId: currentUser._id })
      .populate("country")
      .exec();

    res.status(200).json(findBMI);
  } catch (error) {
    res.json(error.message);
  }
});

//singlepost
router.get("/bmi/all/suggest/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allbmi = await bmiCalc
      .findById(id)
      .populate("userId")
      .populate("country")
      .exec();
    res.status(200).json(allbmi);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
});
//  Crate a new suggestion

router.post("/bmi/bmiform/create", async (req, res) => {
  const newCalc = new bmiCalc(req.body);
  const savedCalc = await newCalc.save();
  res.json(savedCalc);
});

//update Single suggestion
router.put("/bmi/all/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const suggest = await bmiCalc.findById(id);
    suggest.userId.equals(req.body.userId);
    await suggest.updateOne({ $set: req.body });
    res.status(200).json(suggest);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
});

// find single user bmi suggestion

router.delete("/bmi/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const suggest = await bmiCalc.findById(id);
    suggest.userId.equals(req.body.userId);
    await suggest.deleteOne();
    res.status(200).json("Suggestion deleted");
  } catch (error) {
    res.status(500).json("Error from server");
  }
});

module.exports = router;
