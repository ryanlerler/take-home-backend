"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("project_risk_scenarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      risk_scenario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "risk_scenarios",
          key: "id",
        },
      },
      project_risk_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "project_risks",
          key: "id",
        },
      },
      mitigation_status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "mitigation_statuses",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("project_risk_scenarios");
  },
};
