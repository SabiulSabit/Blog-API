const User = require("../models/user");
const bcrypt = require('bcryptjs')

//create new user account
exports.postSignUp = (req, res, next) => {
  const { name, email, password } = req.body;
  
  //hash the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt)

  const user = new User({ name: name, email: email, hashPassword: hash });
  user.save((err, user) => {
    if (err) {
      //console.log(err)
      return res.status(400).json({
        error: err,
      });
    }

    user.hashPassword = undefined;
    return res.json({
      user,
    });
  });
};
