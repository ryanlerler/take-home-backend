"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        email: "lyp2726@outlook.com",
        name: "Ryan Ler",
        role: "PM",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "lyp2726@gmail.com",
        name: "Tan",
        role: "RC",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
