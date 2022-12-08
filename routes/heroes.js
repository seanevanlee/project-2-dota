const express = require("express");
const router = express.Router();
// const heroCtrl = require("../controllers/heroes");
const isLoggedIn = require("../config/auth");

// router.get("/", heroCtrl.index);

// router.get("/:id", heroCtrl.show);

module.exports = router;
