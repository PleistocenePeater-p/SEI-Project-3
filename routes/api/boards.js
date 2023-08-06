const express = require("express");
const router = express.Router();
const boardsCtrl = require('../../controllers/boards');

/*---------- Public Routes ----------*/
router.post('/', boardsCtrl.create);
router.get('/:username', boardsCtrl.index);
router.get('/:id/edit', boardsCtrl.edit);
router.put('/:id', boardsCtrl.update);

/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/


