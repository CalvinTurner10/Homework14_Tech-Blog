const router = require ('express').Router();
const users = require('./users');
const blog = require ('./blog');

router.use('./User', users)
router.use ('/Blogs', blog)

module.exports =router;
