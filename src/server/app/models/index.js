
const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.customer = require("../models/customer.model.js")(sequelize, Sequelize);
db.personnel = require("../models/personnel.model.js")(sequelize, Sequelize);
db.agent = require("../models/agent.model.js")(sequelize, Sequelize);
db.task = require("../models/task.model.js")(sequelize, Sequelize);


db.task.belongsTo(db.customer, {
  foreignKey:'customer_id',
});

db.task.belongsTo(db.personnel, {
  foreignKey:'personnel_id',
});

db.task.belongsTo(db.agent, {
  foreignKey:'agent_id',
});


module.exports = db;
