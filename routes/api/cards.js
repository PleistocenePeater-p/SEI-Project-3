const express = require("express");
const router = express.Router();
const cardsCtrl = require('../../controllers/cards');



/*---------- Public Routes ----------*/
router.post('/:boardId', cardsCtrl.create);
router.get('/:boardId', cardsCtrl.index);
router.delete('/:boardId/:cardId', cardsCtrl.delete)


/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/


