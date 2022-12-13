// import the Model in order to perform CRUD

const User = require("../models/user");
const Hero = require("../models/hero");

async function create(req, res) {
  // req.body.hero comes from the form.
  // It's the value the user entered in the <input> with name="hero".
  const hero = await Hero.findById(req.body.hero);
  hero.reviews.push({
    reviewInfo: req.body.reviewInfo,
    hero: req.body.hero,
    user: req.user,
    playAgain: req.body.playAgain,
  });

  await hero.save();

  // // res.send("Hero created successfully.");
  res.redirect(`/heroes/${req.body.hero}`);
}

module.exports = {
  create,
  // delete: deleteReview,
  // npm i method-override
  // edit: editReview,
  // update,
};
