"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RiskScenario extends Model {
    static associate(models) {
      this.belongsToMany(models.projectRisk, {
        through: models.projectRiskScenario,
      });
      this.hasMany(models.projectRiskScenario);
    }
  }
  RiskScenario.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      mitigationStrategy: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "riskScenario",
      underscored: true,
    }
  );
  return RiskScenario;
};
