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

//get user info from user id
router.param("userId", userController.userByID);

module.exports = router;
