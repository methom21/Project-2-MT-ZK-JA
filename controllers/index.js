const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const heroApiRoutes = require('./heroApi');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/heroApi', heroApiRoutes);


module.exports = router;
