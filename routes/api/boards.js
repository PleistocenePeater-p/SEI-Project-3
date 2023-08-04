const express = require("express");
const router = express.Router();
const boardsCtrl = require('../../controllers/boards');

/*---------- Public Routes ----------*/
router.post('/', boardsCtrl.create);
//router.get('/', boardsCtrl.index)

/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/


