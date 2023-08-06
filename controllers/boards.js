const Board = require('../models/board');
const User = require('../models/user');
module.exports = {
    create,
    index,
    edit
  };

  async function edit(req, res) {
    console.log(req.params)
    console.log(req.body)
    try {
      const boards = await Board.findOneAndUpdate({_id: req.params.id}, req.body)
      res.status(200).json({boards});
    } catch (err) {
      res.status(400).json({error: err});
    }
  }


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
        res.status(400).json({error: err});
      }
  }

  async function index(req, res) {
    try {
      const user = await User.findOne({username: req.params.username})
      if(!user) return res.status(404).json({error: 'User not found'})
      console.log("check check -users Controller")
      const boards = await Board.find({user: user._id}).populate("user").exec();
      res.status(200).json({boards})
      console.log(boards, "boards -users Controller")
  //    res.status(200).json({boards: boards, user: user})
    } catch (err) {
      res.status(400).json({error: err})
    }
  }