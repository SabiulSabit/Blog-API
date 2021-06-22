const post = require("../models/post.js");
const Post = require("../models/post.js");
const _ = require("lodash");

//get post info from its is
exports.postByID = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Post not Found",
      });
    }

    req.post = post;
    next();
  });
};

//create new post
exports.postCreatPost = (req, res, next) => {
  const { title, content, tags } = req.body;
  const authorId = req.profile._id;

  //valid title and content
  if (title.length <= 0 || content.length <= 0) {
    return res.status(400).json({
      error: "Ttile and Content Required",
    });
  }

  //create post
  const post = new Post({
    title: title,
    content: content,
    tags: tags,
    author: authorId,
  });

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
};

//update post
exports.updatePost = (req, res, next) => {
 
  let postId = req.post._id;

  Post.findOneAndUpdate(
    { _id: postId },
    { $set: req.body },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      req.post = result;
      return res.json({
        message: "Post Updated Successfully",
      });
    }
  );
};

//delete a post
exports.deletePost = (req, res, next) => {
  let post = req.post;

  post.remove((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json({
      message: "Post deleted Successfully",
    });
  });
};


//add comment to post
exports.postAddComment = (req,res,next) =>{
  
  let postId = req.post._id; 

  let comments = {
    user: req.profile._id,
    comment: req.body.comment
  }

  Post.findOneAndUpdate(
    { _id: postId },
    { $set: {comments: comments}  },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      req.post = result;
      return res.json({
        message: "Comment Added Successfully",
      });
    }
  );
}