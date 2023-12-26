const express = require("express");
const router = express.Router();

class ProjectRiskScenarioRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.get("/", this.controller.getAll);
    router.put("/:id", this.controller.editMitigation);
    router.delete("/:id", this.controller.delete);
    return router;
  };
}

module.exports = ProjectRiskScenarioRouter;
