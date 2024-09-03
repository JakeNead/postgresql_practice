const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require("../controllers/controller");

router.get("/", controller.home);

router.get("/new", controller.new_username);

router.post("/new", (req, res) => {
  console.log("username to be saved", req.body.username);
});

module.exports = router;
