const router = require('express').Router();

const apiRoutes = require('./api');
const heroApiRoutes = require('./heroApi');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/heroApi', heroApiRoutes);


module.exports = router;
