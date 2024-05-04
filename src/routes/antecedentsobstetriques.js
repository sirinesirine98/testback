const express = require("express");
const AntecedentObstetriquesController = require("../controllers/antecedentsobstetriques");
const route = express.Router();

route.get("/", AntecedentObstetriquesController.GetAllData);
route.get("/:id", AntecedentObstetriquesController.FindDataById);
route.post("/add", AntecedentObstetriquesController.AddData);
route.put("/:id", AntecedentObstetriquesController.UpdateData);
route.delete("/:id", AntecedentObstetriquesController.DeleteData);

module.exports = route;
