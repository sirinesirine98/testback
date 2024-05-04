const express = require("express");
const AntecedentController = require("../controllers/antecedents");
const route = express.Router();

route.get("/", AntecedentController.GetAllData);
route.get("/:id", AntecedentController.FindDataById);
route.post("/add", AntecedentController.AddData);
route.put("/:id", AntecedentController.UpdateData);
route.delete("/:id", AntecedentController.DeleteData);

module.exports = route;
