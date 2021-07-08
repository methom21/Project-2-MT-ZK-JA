const router = require('express').Router();
const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');


router.use('/users', userRoutes);
router.use('/heros', heroRoutes);

module.exports = router;
