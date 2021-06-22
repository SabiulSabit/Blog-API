const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlenght: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashPassword: {
      type: String,
      required: true,
    },
    post: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);



//add Methods
userSchema.methods = {

  authenticate: function (plainText){
      return bcrypt.compareSync(plainText, this.hashPassword);
  }

}


module.exports = mongoose.model('User', userSchema);