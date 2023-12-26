const BaseController = require("./baseController");

class ProjectRiskController extends BaseController {
  constructor(model, userModel, riskScenarioModel, projectRiskScenarioModel) {
    super(model);
    this.userModel = userModel;
    this.riskScenarioModel = riskScenarioModel;
    this.projectRiskScenarioModel = projectRiskScenarioModel;
  }

  getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const projectRisk = await this.model.findByPk(id, {
        include: [
          this.userModel,
          this.riskScenarioModel,
          this.projectRiskScenarioModel,
        ],
      });
      return res.json(projectRisk);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };

  add = async (req, res) => {
    const { email, riskScenarioId, mitigationStatusId } = req.body;
    try {
      const user = await this.userModel.findOne({
        where: {
          email,
        },
      });

      const projectRisk = await this.model.create({
        userId: user.id,
      });

      const newProject = await this.projectRiskScenarioModel.create({
        riskScenarioId,
        projectRiskId: projectRisk.id,
        mitigationStatusId,
      });

      return res.json(newProject);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };
}

module.exports = ProjectRiskController;
