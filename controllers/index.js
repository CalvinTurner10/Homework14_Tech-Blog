const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./hr');

router.use('/', hr);
router.use('/api', apiRoutes);

module.exports = router;
