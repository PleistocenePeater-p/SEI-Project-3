const Board = require('../models/board');


module.exports = {create, index, delete:deleteOne};

async function deleteOne(req, res) {
    try {
        const board = await Board.findById(req.params.boardId)
        const card = board.cards.id(req.params.cardId)
        card.remove()
        await board.save()
        res.status(201).json({cards: board.cards})
    } catch (err) {
        res.status(400).json({err})
    }
}

async function create(req,res){
    console.log(req.body)
    try {
        const board = await Board.findById(req.params.boardId);
        console.log(board)
        board.cards.push({user: req.user._id, content: req.body.content});
        await board.save();
        res.status(201).json({cards: board.cards})
    } catch (err) {
        res.status(400).json({err})
        
    }
}

async function index(req, res) {
    try {
      const cards = await Board.findById(req.params.boardId)
      console.log(cards)
      res.status(200).json(cards)
    } catch (err) {
      res.status(400).json({error: err});
    }
}