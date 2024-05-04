

const express = require("express");
const AbsenceMedecinController = require("../controllers/absencemedecins");
const route = express.Router();

route.get("/", AbsenceMedecinController.GetAllData);
route.get("/:id", AbsenceMedecinController.FindDataById);
route.post("/add", AbsenceMedecinController.AddData);
route.put("/:id", AbsenceMedecinController.UpdateData);
route.delete("/:id", AbsenceMedecinController.DeleteData);

module.exports = route;
