"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("mitigation_statuses", [
      {
        status: "not mitigated",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        status: "partially mitigated",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        status: "fully mitigated",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("mitigation_statuses", null, {});
  },
};
