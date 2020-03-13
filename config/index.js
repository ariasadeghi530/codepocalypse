
module.exports = require('mongoose').connect('mongodb://localhost/homegoods',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });