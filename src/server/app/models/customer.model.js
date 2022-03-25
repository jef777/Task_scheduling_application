module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {

    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },

  });

  return Customer;
};
