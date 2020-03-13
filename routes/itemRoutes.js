const router = require('express').Router();
const passport = require('passport');

const { Item, User } = require('../models');



// Get all items
router.get('/items', passport.authenticate('jwt'), (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch(e => console.log(e));
});

router.post('/items', (req,res) => {
  Item.create()
  .then(() => res.sendStatus(200))
  .catch(e => console.log(e))
})


module.exports = router;