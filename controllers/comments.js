const SunPost = require('../models/sunPost');

module.exports = {
    create,
    deleteComment
}

async function create(req, res){
 
    try {
        const sunPost = await SunPost.findById(req.params.id);
		
        sunPost.comments.push({username: req.user.username, userId: req.user._id, text: req.body.text}); //mutating a document
        await sunPost.save()
        res.status(201).json({data: 'comment added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteComment(req, res){
    try {
        
        const sunPost = await SunPost.findOne({'comments._id': req.params.id, 'comments.username': req.user.username});
        sunPost.comments.remove(req.params.id) // mutating a document
		console.log(sunPost, " <--- deleted post")
        await sunPost.save() 
        res.json({data: 'comment removed'})
    } catch(err){
        res.status(400).json({err})
    }
}