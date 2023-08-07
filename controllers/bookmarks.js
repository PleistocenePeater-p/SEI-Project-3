const Board = require('../models/board');


module.exports = {create, removeBookmark};

async function create(req,res){
    try {
        const board = await Board.findById(req.params.id);
        board.bookmarks.push({username: req.user.username, userId: req.user._id});
        await board.save();
        res.status(201).json({data: "Bookmark ~ Recorded :)))"})
    } catch (err) {
        res.status(400).json({err})
        
    }
}

async function removeBookmark(req,res){
    try {
        
        const board = await Board.findOne({'bookmarks._id' : req.params.id, "bookmarks.username" : req.user.username});
        board.bookmarks.remove(req.params.id); //Mutating a document
        await board.save();
        res.json({data:"Remove from Bookmark Status"})
    } catch (err) {
        res.status(400).json({err})
        
    }
}