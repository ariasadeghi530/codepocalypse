const router = require('express').Router();

const passport = require('passport');

const { Item, User } = require('../models');


// Get all items
router.get('/items', passport.authenticate('jwt'), (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch(e => console.log(e))
});

//Get an item
router.get('/items/:id', (req, res) => [
  Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch(e => console.log(e))
]);

module.exports = router;