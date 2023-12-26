const express = require("express");
const router = express.Router();

class ProjectRiskRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.get("/", this.controller.getAll);
    router.get("/:id", this.controller.getOne);
    router.post("/", this.controller.add);
    return router;
  };
}

module.exports = ProjectRiskRouter;
