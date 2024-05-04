const express = require("express");
const ConsultationGynecologueController = require("../controllers/consultationgynecologique");
const route = express.Router();

route.get("/", ConsultationGynecologueController.GetAllData);
route.get("/:id", ConsultationGynecologueController.FindDataById);
route.post("/add", ConsultationGynecologueController.AddData);
route.put("/:id", ConsultationGynecologueController.UpdateData);
route.delete("/:id", ConsultationGynecologueController.DeleteData);

module.exports = route;
