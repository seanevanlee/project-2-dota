const express = require("express");
const router = express.Router();
const heroCtrl = require("../controllers/heroes");
const isLoggedIn = require("../config/auth");
const Hero = require("../models/hero");

router.get("/", heroCtrl.index);
router.get("/:id", heroCtrl.show);

router.post("/", heroCtrl.create);

module.exports = router;
