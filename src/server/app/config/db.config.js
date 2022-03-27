// require("dotenv").config();

module.exports = {
  dbname: "d23ank0fg7nedj",
  host: "ec2-52-73-155-171.compute-1.amazonaws.com",
  port: "5432",
  user: "rwdfseugzpyyml",
  password: "d7eac35388cf636ea2ea8fbf4b4aa88c6d7ed4185f97f49fc5257829b885bd21",
  sslmode: "require",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// dbname=d23ank0fg7nedj
// host=ec2-52-73-155-171.compute-1.amazonaws.com
// port=5432
// user=rwdfseugzpyyml
// password=d7eac35388cf636ea2ea8fbf4b4aa88c6d7ed4185f97f49fc5257829b885bd21
// sslmode=require
