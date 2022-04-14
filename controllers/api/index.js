const router = require('express').Router();
const userRoutes = require('./ur');
const projectRoutes = require('./pr');

router.use('/users', ur);
router.use('/blogs', pr);

module.exports = router;
