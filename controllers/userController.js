const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  getOne = async (req, res) => {
    const { email } = req.query;
    try {
      const user = await this.model.findOne({
        where: {
          email,
        },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };

  signUp = async (req, res) => {
    const { email, name, role } = req.body;
    try {
      const [user] = await this.model.findOrCreate({
        where: {
          email,
          role,
        },
        defaults: {
          email,
          name,
          role,
        },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };
}

module.exports = UserController;
