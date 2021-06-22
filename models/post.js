const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const UserSchema = new mongoose.Schema(
    {
      user: { type: ObjectId, ref: "User" },
      name: String,
      email: String,
      comment: String
    },
    { timestamps: true }
  );
  
const User = mongoose.model("CommentedUser", UserSchema);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlenght: 32,
    },
    content: {
      type: String,
      required: true,
      maxlenght: 5000,
    },
    author: { type: ObjectId, ref: "User" },
    comments: [UserSchema],
  },
  { timestamps: true }
);




module.exports = mongoose.model('Post', postSchema);