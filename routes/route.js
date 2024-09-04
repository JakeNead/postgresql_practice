const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

router.get("/", controller.home);

router.get("/new", controller.new_username);

router.post("/new", controller.submit_new_username);

router.get("/search", controller.search_username);

module.exports = router;
