const router = require("express").Router();
const axios = require("axios");
const { User, Hero } = require("../models");
const withAuth = require("../utils/auth");

//HOMEPAGE
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("home", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("signup");
});

//SEARCH
router.get("/search/:hero?", withAuth, async (req, res) => {
  if (!req.session.logged_in) return res.redirect("/");
  try {
    const heroName = req.params.hero;
    let heros = null;
    if (heroName) {
      const { data } = await axios.get(
        `https://superheroapi.com/api/${process.env.DB_APIKEY}/search/${heroName}`
      );
      heros = data.results;
    }

    res.render("search", {
      logged_in: req.session.logged_in,
      heros,
    });
    // res.render("", {});
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

//USER-ROSTER
router.get("/roster", withAuth, async (req, res) => {
  const userData = await Hero.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });

  const rosterData = userData.map((project) => project.get({ plain: true }));
  console.log(rosterData);
  if (req.session.logged_in) {
    res.render("roster", { rosterData, logged_in: req.session.logged_in });
    return;
  }
});

module.exports = router;
