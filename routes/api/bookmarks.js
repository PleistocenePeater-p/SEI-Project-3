const express = require("express");
const router = express.Router();
const bookmarksCtrl = require('../../controllers/bookmarks');

/*---------- Public Routes ----------*/
router.post('/:id', bookmarksCtrl.create);
router.delete('/:id', bookmarksCtrl.removeBookmark);


/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/

