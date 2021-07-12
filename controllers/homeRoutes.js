const router = require('express').Router();
const { User } = require('../models');
const { Roster } = require('../models');
const withAuth = require('../utils/auth');

//HOMEPAGE
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//LOGIN
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});


//SEARCH
router.get('/search', withAuth, async (req, res) => {
  const userData = await User.findAll({
    attributes: { exclude: ['password'] },
    order: [['name', 'ASC']],
  });

  const users = userData.map((project) => project.get({ plain: true }));

  if(req.session.logged_in)
  {res.render('search',
  {users,logged_in: req.session.logged_in,}
  );return}

});

//SHOW SEARCH RESULTS
router.get('/search', withAuth, async (req, res) => {
  const userData = await User.findAll({
    attributes: { exclude: ['password'] },
    order: [['name', 'ASC']],
  });

  const users = userData.map((project) => project.get({ plain: true }));

  if(req.session.logged_in)
  {res.render('searchResults',
  {users,logged_in: req.session.logged_in,}
  );return}

});


//USER-ROSTER
router.get('/roster', withAuth, async (req, res) => {
  const rosterData = await User.findAll({
    attributes: { exclude: ['password'] },
    order: [['name', 'ASC']],
  });

  const usersRoster = rosterData .map((project) => project.get({ plain: true }));

  if(req.session.logged_in)
  {res.render('roster',
  {usersRoster,logged_in: req.session.logged_in,}
  );return}

});









module.exports = router;
