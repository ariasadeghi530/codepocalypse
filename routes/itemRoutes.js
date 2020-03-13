const router = requrie('express').Router();

const passport = require('passport');

const { Item, User } = require('../models');


// Post an items
router.post('/items', passport.authenticate('jwt'), (req, res) => {
  Item.create({ text: req.body.text, isDone: req.body.isDone, owner: req.user._id })
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.user._id, {
        $push: {
          items: _id
        }
      })
        .then(() => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e));
});

//Put an item
router.put('/items/:id', (req, res) => [
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
]);


//Delete an item
router.delete('/items/:id', (req, res) => {
  Item.findByIdAndRemove(req, params.id)
    .then((response) => {
      User.findByIdAndUpdate(response.owner, { $pull: { items: response._id } })
        .then(() => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e));
})

module.exports = router;