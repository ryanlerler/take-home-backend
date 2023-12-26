const BaseController = require("./baseController");

class RiskScenarioController extends BaseController {
  constructor(model) {
    super(model);
  }

  getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const riskScenario = await this.model.findOne({
        where: {
          id,
        },
      });
      return res.json(riskScenario);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };
}

module.exports = RiskScenarioController;
