const router = require('express').Router();

const { User } = require('../models');

const jwt = require('jsonwebtoken');

// Get one user
// router.get('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//   .populate('items')
//   .then(user => res.json(user))
//   .catch(e => console.log(e))
// });

// router.post('/users', (req, res) => {
//   .then(() => res.sendStatus(200))
//   .catch(e => console.log(e));
// });

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err;
    res.json({
      isLoggedIn: !!user,
      items: user.items,
      user: user.username,
      token: jwt.sign({ id: user._id }, SECRET)
    });
  })
})

router.post('/user/register', (req, res) => {
  User.register(new User({
    username: req.body.username,
    email: req.body.emails
  }), req.body.password, err => {
    if (err) throw err;
    res.sendStatus(200);
  })
})


module.exports = router;
