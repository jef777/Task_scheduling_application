'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('tasks', [
      {
        agent_id: 1,
        personnel_id: 1,
        customer_id: 1,
        agent_id: 1,
        assigned: new Date(),
        inProgress: new Date(),
        completed: new Date(),
        deferred: new Date(),
        status: 'deferred',
        location: 'westlands',
        comments: 'no answer',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        agent_id: 2,
        personnel_id: 2,
        customer_id: 2,
        assigned: new Date(),
        inProgress: new Date(),
        completed: new Date(),
        deferred: new Date(),
        status: 'deferred',
        location: 'westlands',
        comments: 'no answer',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        agent_id: 3,
        assigned: new Date(),
        inProgress: new Date(),
        completed: new Date(),
        deferred: new Date(),
        status: 'deferred',
        location: 'westlands',
        comments: 'no answer',
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
