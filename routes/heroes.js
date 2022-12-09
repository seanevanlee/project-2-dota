const express = require("express");
const router = express.Router();
// const heroCtrl = require("../controllers/heroes");
const isLoggedIn = require("../config/auth");

router.get("/", (req, res) => {
  res.render("heroes/index.ejs");
});

router.get("/:id", (req, res) => {
  //console.log(req.params.id);
  res.locals.id = req.params.id;
  res.render("heroes/show.ejs");
});

module.exports = router;
