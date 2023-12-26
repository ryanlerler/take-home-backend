const BaseController = require("./baseController");

class MitigationStatusController extends BaseController {
  constructor(model) {
    super(model);
  }

  getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const mitigationStatus = await this.model.findOne({
        where: {
          id,
        },
      });
      return res.json(mitigationStatus);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };
}

module.exports = MitigationStatusController;
