const express = require("express");
const router = express.Router();
const boardsCtrl = require('../../controllers/boards');

//EXPERIMENT
const bookmarksCtrl = require('../../controllers/bookmarks');




/*---------- Public Routes ----------*/
router.post('/', boardsCtrl.create);
router.get('/', boardsCtrl.index);
//router.get('/:username, boardsCtrl.index);
//router.get('/:id/edit', boardsCtrl.edit);
//router.put('/:id', boardsCtrl.update);

//EXPERIMENT
router.post('/bookmarks/:id', bookmarksCtrl.create);
router.delete('/bookmarks/:id', bookmarksCtrl.removeBookmark);
/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/


