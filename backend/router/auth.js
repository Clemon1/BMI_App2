const router = require("express").Router();
const user = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Creating jwt
const createToken = (id) => {
  return jwt.sign({ id }, "mySecretclem", { expiresIn: "1d" });
};

// Register auth
router.post("/auth/register", async (req, res) => {
  const { email } = req.body;
  const findUser = await user.findOne({ email });
  if (findUser) {
    return res.json("User already has an account");
  }
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 12);
    const users = new user({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashPassword,
    });

    const token = createToken(users._id);
    const newUser = await users.save();

    res.status(201).json({ newUser, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Login auth

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(404).json("This user is doesnt have an account");
    }
    const findPassword = await bcrypt.compare(password, users.password);
    if (!findPassword) {
      return res.status(404).json("Incorrect Password");
    }
    const token = createToken(users._id);
    res.status(201).json({ users, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
