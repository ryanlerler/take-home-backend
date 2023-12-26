const express = require("express");
const router = express.Router();

class RiskScenarioRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.get("/", this.controller.getAll);
    router.get("/:id", this.controller.getOne);
    return router;
  };
}

module.exports = RiskScenarioRouter;
