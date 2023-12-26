"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MitigationStatus extends Model {
    static associate(models) {
      this.hasMany(models.projectRiskScenario);
    }
  }
  MitigationStatus.init(
    {
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "mitigationStatus",
      underscored: true,
    }
  );
  return MitigationStatus;
};
