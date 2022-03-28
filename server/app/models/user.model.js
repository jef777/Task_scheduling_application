module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    phone: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
