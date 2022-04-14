const router = require('express').Router();
const user = require('./user');
const project = require('./project');

router.use('/user', user);
router.use('/blogs', project);

module.exports = router;
