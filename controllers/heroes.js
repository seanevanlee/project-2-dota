// import the Model in order to perform CRUD
const Hero = require("../models/hero");
const User = require("../models/user");

async function index(req, res) {
  console.log("req.user: ", req.user);

  // 1. Get the heroes from the database
  const heroes = await Hero.find({
    // The filter to isolate a person's heroes
    //  user: req.user,
  });

  // 2. Render the heroes
  res.render("heroes/index", { heroes: heroes });
}

async function show(req, res) {
  //console.log(req.params.id);
  //res.locals.id = req.params.id;

  // 1. Get the data from the database
  const hero = await Hero.findById(req.params.id).exec();

  console.log("result: ", hero);

  // 2. Render the data
  res.render("heroes/show.ejs", {
    hero: hero,
  });
}

async function create(req, res) {
  // req.body.name comes from the form.
  // It's the value the user entered in the <input> with name="name".
  await Hero.create({ name: req.body.name, user: req.user });

  // res.send("Hero created successfully.");
  res.redirect("/heroes");
}

module.exports = {
  show,
  index,
  create,
};
