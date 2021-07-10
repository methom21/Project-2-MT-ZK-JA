const router = require('express').Router();
const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');
const heroRoster = require('./heroRoster');


router.use('/users', userRoutes);
router.use('/heros', heroRoutes);
router.use('/heroRoster', heroRoster);

module.exports = router;
