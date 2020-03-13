
require('dotenv').config();

module.exports = require('mongoose').connect('mongodb://localhost/homegooods',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });