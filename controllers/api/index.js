const router = require('express').Router();
const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');
const rosterRoutes = require('./rosterRoutes');


router.use('/users', userRoutes);
router.use('/heros', heroRoutes);
router.use('/roster', rosterRoutes);

module.exports = router;
