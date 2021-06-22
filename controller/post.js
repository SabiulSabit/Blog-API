const Post = require("../models/post.js");

//create new post
exports.postCreatPost = (req,res,next) => {
   const {title, content, tags} = req.body;
   const authorId = req.profile._id;
   
  
   //create post
   const post = new Post({ title: title, content: content, tags: tags, author: authorId });

   post.save((err, data) => {
    if (err) {
      //console.log(err)
      return res.status(400).json({
        error: err,
      });
    }

    return res.json({
      data,
    });
  });


}