module.exports = (sequelize, Sequelize) => {
  const Personnel = sequelize.define("personnel", {

    firstname: {
      type: Sequelize.STRING
    },
    othername: {
      type: Sequelize.STRING
    }

  });

  return Personnel;
};
