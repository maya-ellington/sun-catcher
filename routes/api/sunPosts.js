const express = require('express');
const router = express.Router();
const sunPostsCtrl = require('../../controllers/sunPosts');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), sunPostsCtrl.create);
router.get('/', isLoggedIn, sunPostsCtrl.index)


/*---------- Protected Routes ----------*/

function isLoggedIn(req, res, next){
    console.log(req.user, 'isloggedin req.user')
    if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}

module.exports = router;
