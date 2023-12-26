const BaseController = require("./baseController");

class ProjectRiskScenarioController extends BaseController {
  constructor(
    model,
    riskScenarioModel,
    mitigationStatusModel,
    projectRiskModel,
    userModel
  ) {
    super(model);
    this.riskScenarioModel = riskScenarioModel;
    this.mitigationStatusModel = mitigationStatusModel;
    this.projectRiskModel = projectRiskModel;
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    try {
      const projectRiskScenarios = await this.model.findAll({
        include: [
          {
            model: this.projectRiskModel,
            include: [
              {
                model: this.userModel,
              },
            ],
          },
          this.riskScenarioModel,
          this.mitigationStatusModel,
        ],
        order: [["id", "DESC"]],
      });
      return res.json(projectRiskScenarios);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };

  editMitigation = async (req, res) => {
    const { id } = req.params;
    const { mitigationStatusId } = req.body;
    try {
      const projectRiskScenario = await this.model.findByPk(id, {
        include: [
          this.riskScenarioModel,
          this.mitigationStatusModel,
          {
            model: this.projectRiskModel,
            include: [
              {
                model: this.userModel,
              },
            ],
          },
        ],
      });

      await projectRiskScenario.update({
        mitigationStatusId,
      });
      await projectRiskScenario.reload();
      return res.json(projectRiskScenario);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      await this.model.destroy({
        where: {
          id,
        },
      });
      return res.json("DELETED");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };
}

module.exports = ProjectRiskScenarioController;
