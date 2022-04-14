const router = require ('express').Router();
const users = require('./users');
const blog = require ('./blog');

router.use('./User', users)
router.use ('/blogs', blog)

module.exports =router;
