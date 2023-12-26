const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.get("/", this.controller.getOne);
    router.post("/", this.controller.signUp);
    return router;
  };
}

module.exports = UserRouter;
