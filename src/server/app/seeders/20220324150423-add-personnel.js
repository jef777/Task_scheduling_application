'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('personnels', [
      {
        firstname: 'cusomer 1 fn',
        othername: 'cusomer 1 ln',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        firstname: 'cusomer 2 fn',
        othername: 'cusomer 2 ln',
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
