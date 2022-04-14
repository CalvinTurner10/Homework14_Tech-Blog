const router = require('express').Router();
const { TBlog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await TBlog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete
router.delete('/:id' , withAuth, async (req, res) => {
  try{
    const TBlogData = await TBlog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    if (!TBlogData){
      res.status(404).json({message: 'Try again!'});
      return;
    }
    res.status(200).json(TBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const TBlogData = await TBlog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!TBlogData) {
      res.status(404).json({ message: 'Try again!' });
      return;
    }

    res.status(200).json(TBlogData);
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