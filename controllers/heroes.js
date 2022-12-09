// import the Model in order to perform CRUD
const Hero = require("../models/hero");

function index(req, res) {
  console.log(req.user);
  res.render("heroes/index");
}
module.exports = {
  show,
  index,
};
