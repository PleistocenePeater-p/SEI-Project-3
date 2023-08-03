const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
//Adding Multer to allow users to set a profile picture upon signing up
const multer = require('multer');
const upload = multer()

/*---------- Public Routes ----------*/
router.post("/signup", upload.single('photo'), usersCtrl.signup);
router.post("/login", usersCtrl.login);
router.get('/:username', usersCtrl.boards);

/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/



