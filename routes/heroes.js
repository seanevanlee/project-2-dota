const express = require("express");
const router = express.Router();
const heroCtrl = require("../controllers/heroes");
const isLoggedIn = require("../config/auth");
const Hero = require("../models/hero");

router.get("/", heroCtrl.index);

router.get("/:id", heroCtrl.show);
// https://www.geeksforgeeks.org/mongoose-findbyid-function/
// https://mongoosejs.com/docs/api.html#model_Model-findById

router.post("/", heroCtrl.create);

module.exports = router;
