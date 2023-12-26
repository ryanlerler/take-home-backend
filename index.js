const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/models/index");
const {
  user,
  riskScenario,
  mitigationStatus,
  projectRisk,
  projectRiskScenario,
} = db;

const UserRouter = require("./routers/userRouter");
const UserController = require("./controllers/userController");
const RiskScenarioRouter = require("./routers/riskScenarioRouter");
const RiskScenarioController = require("./controllers/riskScenarioController");
const MitigationStatusRouter = require("./routers/mitigationStatusRouter");
const MitigationStatusController = require("./controllers/mitigationStatusController");
const ProjectRiskRouter = require("./routers/projectRiskRouter");
const ProjectRiskController = require("./controllers/projectRiskController");
const ProjectRiskScenarioRouter = require("./routers/projectRiskScenarioRouter");
const ProjectRiskScenarioController = require("./controllers/projectRiskScenarioController");

const PORT = process.env.PORT || 3000;

const app = express();

const userController = new UserController(user);
const userRouter = new UserRouter(userController).routes();
const riskScenarioController = new RiskScenarioController(riskScenario);
const riskScenarioRouter = new RiskScenarioRouter(
  riskScenarioController
).routes();
const mitigationStatusController = new MitigationStatusController(
  mitigationStatus
);
const mitigationStatusRouter = new MitigationStatusRouter(
  mitigationStatusController
).routes();
const projectRiskController = new ProjectRiskController(
  projectRisk,
  user,
  riskScenario,
  projectRiskScenario
);
const projectRiskRouter = new ProjectRiskRouter(projectRiskController).routes();
const projectRiskScenarioController = new ProjectRiskScenarioController(
  projectRiskScenario,
  riskScenario,
  mitigationStatus,
  projectRisk,
  user
);
const projectRiskScenarioRouter = new ProjectRiskScenarioRouter(
  projectRiskScenarioController
).routes();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/risk-scenarios", riskScenarioRouter);
app.use("/mitigation-status", mitigationStatusRouter);
app.use("/project-risk", projectRiskRouter);
app.use("/project-risk-scenario", projectRiskScenarioRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
