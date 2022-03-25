'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


     await queryInterface.bulkInsert('customers', [
      {
        firstname: 'cusomer 1 fn',
        lastname: 'cusomer 1 ln',
        phone: '07555757565',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        firstname: 'cusomer 2 fn',
        lastname: 'cusomer 2 ln',
        phone: '0744356465757',
        createdAt: new Date(),
        updatedAt: new Date(),

      },


     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
