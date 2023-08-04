const Board = require('../models/board');
module.exports = {
    create,
//    index,
  };

  async function create (req, res) {
    console.log(req.body, "<---- req.body")
    try {
        const board = await Board.create({// Use our Model to create a document in the boards collection in Mongodb
            title: req.body.title,
            caption: req.body.caption,
            user: req.user // req.user is defined in config/auth if we the client sends over the jwt token
        });
  
        await board.populate("user"); // populating on a mongoose document! this gives us the user object
        // this response will show up in the allBoardsPage in   const responseData = await postsApi.create(post);
        res.status(201).json({ data: board }); // <- this is what responseData should be
      } catch (err) {
        res.status(400).json({ error: err });
      }
  }