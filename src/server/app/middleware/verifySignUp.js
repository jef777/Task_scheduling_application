const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrPhone = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already taken!"
      });
      return;
    }

    // phone
    User.findOne({
      where: {
        phone: req.body.phone
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Phone number is already taken!"
        });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrPhone: checkDuplicateUsernameOrPhone
};

module.exports = verifySignUp;
