const express = require("express");
const jwt = require("jsonwebtoken");

const router = new express.Router();

// @route POST /login
// @desc User log in
// @access public
router.post("/login", (req, res) => {
  try {
    const username = req.body.username;
    const token = jwt.sign(username, process.env.TOKEN_SECRET);

    res.cookie("token", token, { httpOnly: true, secure: true });
    res.status(200).send({ username, token });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
