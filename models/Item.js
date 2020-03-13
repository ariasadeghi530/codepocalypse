const { model, Schema } = require('mongoose');

module.exports = model('item', new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}));