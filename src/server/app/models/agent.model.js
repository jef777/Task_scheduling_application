module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("agent", {
    agent_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    gender: {
      type: Sequelize.STRING
    },
    access_code: {
      type: Sequelize.INTEGER
    },
    registration: {
      type: Sequelize.STRING
    }
  });

  return Task;
};
