const router = require('express').Router();
const { Blogs, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogs and add with user data
    const blogsData = await Blogs.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
        
        },
      ],
    });

    //  adding the data so that template can read it
    const blogs = blogsData.map((blogs) => blogs.get({ plain: true }));

    // Passing thedata and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogs/:id', withAuth, async (req, res) => {
  try {
    const blogsData = await Blogs.findByPk(req.params.id, {

      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = blogsData.get({ plain: true });

    res.render('blogs', {
      ...blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogs }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


  router.get('/edit/:id', async (req, res) => {
    try {
      const blogsData = await Blogs.findByPk(req.params.id, {
  
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const blogs = blogsData.get({ plain: true });
  
      res.render('edit', {
        ...blogs,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  



router.get('/test', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogsData = await Blogs.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['name', 'text'],
        },
      ],
    });

    // Serialize the data 
    const blogs = blogsData.map((blogs) => blogs.get({ plain: true }));


    res.send (blogs);
    
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
