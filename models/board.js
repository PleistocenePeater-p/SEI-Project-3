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


const bookmarkSchema = mongoose.Schema({
  username: String,
  userId: {type: mongoose.Schema.Types.ObjectId}
})

// ONE BOARD

// SCHEMA Defines what structure/shape 
// that the documents created from the Board Model
// that our stored in the database should look like
const boardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: {type: String, required: true},
  caption: {type: String, required: true},
  // a card belongs to a board
  cards: [cardSchema],// using embedding to create the relationship
  bookmarks: [bookmarkSchema] //embedded
});



module.exports = mongoose.model('Board', boardSchema);