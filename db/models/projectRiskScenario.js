"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectRiskScenario extends Model {
    static associate(models) {
      this.belongsTo(models.riskScenario);
      this.belongsTo(models.projectRisk);
      this.belongsTo(models.mitigationStatus);
    }
  }
  ProjectRiskScenario.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      riskScenarioId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "riskScenario",
          key: "id",
        },
      },
      projectRiskId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "projectRisk",
          key: "id",
        },
      },
      mitigationStatusId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "mitigationStatus",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "projectRiskScenario",
      underscored: true,
    }
  );
  return ProjectRiskScenario;
};
