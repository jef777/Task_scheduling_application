// require("dotenv").config();

// module.exports = {
//   HOST: "localhost",
//   USER: "jeff",
//   PASSWORD: "jeffc123",
//   DB: "jeff",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

module.exports = {
  DB: "d23ank0fg7nedj",
  HOST: "ec2-52-73-155-171.compute-1.amazonaws.com",
  PORT: "5432",
  USER: "rwdfseugzpyyml",
  PASSWORD: "d7eac35388cf636ea2ea8fbf4b4aa88c6d7ed4185f97f49fc5257829b885bd21",
  sslmode: "require",
  dialect: "postgres",
  use_env_variable: "postgres://rwdfseugzpyyml:d7eac35388cf636ea2ea8fbf4b4aa88c6d7ed4185f97f49fc5257829b885bd21@ec2-52-73-155-171.compute-1.amazonaws.com:5432/d23ank0fg7nedj",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
