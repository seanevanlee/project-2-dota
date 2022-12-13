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

  // res.send("Hero created successfully.");
  res.redirect(`/heroes/${req.body.hero}`);
}

async function deleteReview(req, res) {
  // req.body.hero comes from the form.
  // It's the value the user entered in the <input> with name="hero".
  const hero = await Hero.findById(req.body.hero);
  hero.reviews = hero.reviews.filter(
    (review) => !review._id.equals(req.params.id)
  );

  await hero.save();

  // res.send("Hero created successfully.");
  res.redirect(`/heroes/${req.body.hero}`);
}

async function update(req, res) {
  // req.body.hero comes from the form.
  // It's the value the user entered in the <input> with name="hero".
  const hero = await Hero.findById(req.body.hero);
  hero.reviews = hero.reviews.map((review) => {
    if (!review._id.equals(req.params.id)) {
      return review;
    }

    return { ...review, ...req.body };
  });

  await hero.save();

  // res.send("Hero created successfully.");
  res.redirect(`/heroes/${req.body.hero}`);
}

// edit comment
// function editReview(req, res) {
//   res.render("/heroes/edit", { hero: req.params.id });
// }

module.exports = {
  create,
  delete: deleteReview,
  update,
};
