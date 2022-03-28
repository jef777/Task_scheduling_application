const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  // Save User to Database
  User.create({
    phone: req.body.phonenumber,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(() => {
        res.send({ message: "User registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ messageqq: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      phone: req.body.phonenumber
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          accessToken: token,
          expires_in: '24h'
        });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
