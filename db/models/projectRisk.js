"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectRisk extends Model {
    static associate(models) {
      this.belongsToMany(models.riskScenario, {
        through: models.projectRiskScenario,
      });
      this.hasMany(models.projectRiskScenario);
      this.belongsTo(models.user);
    }
  }
  ProjectRisk.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "projectRisk",
      underscored: true,
    }
  );
  return ProjectRisk;
};
