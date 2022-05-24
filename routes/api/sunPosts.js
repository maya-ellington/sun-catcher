const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/sunPosts');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), postsCtrl.create);
router.get('/', isLoggedIn, postsCtrl.index)


/*---------- Protected Routes ----------*/

function isLoggedIn(req, res, next){
    if(req.user) next();
    res.status(401).json({data: 'not authorized! Please log in'})
}

module.exports = router;
