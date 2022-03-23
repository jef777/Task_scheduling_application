require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// database
  const db = require("./app/models");
  db.sequelize.sync();

  // force: true will drop the table if it already exists
  // db.sequelize.sync({force: true}).then(() => {
  //   console.log('Drop and Resync Database with { force: true }');
  //   initial();
  // });

// simple start route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the task scheduling fullstack application" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
