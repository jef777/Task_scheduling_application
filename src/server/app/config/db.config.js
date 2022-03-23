// require("dotenv").config();

module.exports = {
  HOST: "localhost",
  USER: "jeff",
  PASSWORD: "jeffc123",
  DB: "jeff",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
