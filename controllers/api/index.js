const router = require('express').Router();
const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');
const castRoutes = require('./characterCastRoutes');


router.use('/users', userRoutes);
router.use('/heros', heroRoutes);
router.use('/characterCast', castRoutes);

module.exports = router;
