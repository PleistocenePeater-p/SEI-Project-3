const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1 board has many cards
const cardSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  // 1 to many, A card belongs to a User!
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  userName: String,
  userAvatar: String
});




// ONE BOARD

// SCHEMA Defines what structure/shape 
// that the documents created from the Board Model
// that our stored in the database should look like
const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1927
  },
  // a card belongs to a board
  cards: [cardSchema],// using embedding to create the relationship
});

module.exports = mongoose.model('Board', boardSchema);