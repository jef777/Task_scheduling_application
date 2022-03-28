module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    task_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    agent_id: {
      type: Sequelize.INTEGER
    },
    personnel_id: {
      type: Sequelize.INTEGER
    },
    customer_id: {
      type: Sequelize.INTEGER
    },
    assigned: {
      type: Sequelize.DATE
    },
    inProgress: {
      type: Sequelize.DATE
    },
    completed: {
      type: Sequelize.DATE
    },
    deferred: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    splash_page: {
      type: Sequelize.STRING
    },
    mpesa: {
      type: Sequelize.STRING
    },
    autoplay: {
      type: Sequelize.STRING
    },
    comments: {
      type: Sequelize.STRING
    }
  });

  return Task;
};
