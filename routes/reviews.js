const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const isLoggedIn = require("../config/auth");
const reviews = require("../controllers/reviews");

//CRUD
// https://gist.github.com/jim-clark/17908763db7bd3c403e6

// router.post("heroes/:id/reviews", reviewsCtrl.create);
// router.put("/reviews/:id", reviewsCtrl.update);
// router.delete("reviews/:id/", reviewsCtrl.delete);

// router.get("/:id", isLoggedIn, reviewsCtrl.show);
router.post("/", isLoggedIn, reviewsCtrl.create);
// router.delete("/:id", isLoggedIn, reviewsCtrl.delete);

module.exports = router;
