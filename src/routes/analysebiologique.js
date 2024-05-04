const express = require("express");
const AnalysesBiologiquesController = require("../controllers/analysebiologique");
const route = express.Router();

route.get("/", AnalysesBiologiquesController.GetAllData);
route.get("/:id", AnalysesBiologiquesController.FindDataById);
route.post("/add", AnalysesBiologiquesController.AddData);
route.put("/:id", AnalysesBiologiquesController.UpdateData);
route.delete("/:id", AnalysesBiologiquesController.DeleteData);

module.exports = route;
