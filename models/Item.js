const { model, Schema } = require('mongoose');

module.exports = model('item', new Schema({
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }));