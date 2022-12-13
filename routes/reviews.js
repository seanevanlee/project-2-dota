const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const isLoggedIn = require("../config/auth");
const reviews = require("../controllers/reviews");

router.put("/:id", reviewsCtrl.update);

router.post("/", isLoggedIn, reviewsCtrl.create);
router.delete("/:id", isLoggedIn, reviewsCtrl.delete);

module.exports = router;
