const router = require('express').Router();
const { Blogs, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogs = await Blogs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogs);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete
router.delete('/:id' , withAuth, async (req, res) => {
  try{
    const blogData = await Blogs.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    if (!blogData){
      res.status(404).json({message: 'Try again!'});
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'Try again!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/comment', withAuth, async (req, res) => {
  try {
    const newBlog = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;