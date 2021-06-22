const express = require("express");
const router = express.Router();

//get controllers
const authController = require("../controller/auth");
const userController = require("../controller/user");
const postController = require("../controller/post");

//create new post
router
  .route("/post/create/:userId")
  .post(authController.requireSignin, authController.isAuth, postController.postCreatPost);


//update post
router
  .route("/post/update/:postId/:userId")
  .put(authController.requireSignin, authController.isAuth, authController.isAuthor, postController.updatePost);    


//delete post
router
  .route("/post/delete/:postId/:userId")
  .delete(authController.requireSignin, authController.isAuth, authController.isAuthor, postController.deletePost);  


//add comment to post
router.route('/comment/:postId/:userId')
   .post(authController.requireSignin, authController.isAuth, postController.postAddComment);    


//get user info from user id
router.param("userId", userController.userByID);

//get post info from post id
router.param("postId", postController.postByID);

module.exports = router;
