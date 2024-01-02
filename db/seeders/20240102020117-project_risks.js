"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("project_risks", [
      {
        user_id: 1,
        name: "A",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        name: "B",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        name: "C",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("project_risks", null, {});
  },
};
