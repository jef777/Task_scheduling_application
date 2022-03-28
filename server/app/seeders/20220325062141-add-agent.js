'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert('agents', [
      {
        firstname: 'agent 1 fn',
        lastname: 'agent 1 ln',
        age: 24,
        gender: 'male',
        registration: 'self',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'agent 1 fn',
        lastname: 'agent 1 ln',
        age: 24,
        gender: 'male',
        access_code: 1,
        registration: 'self',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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
