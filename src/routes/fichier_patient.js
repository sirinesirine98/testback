const express = require("express");
const FichierPatientController = require("../controllers/fichier_patient");
const route = express.Router();

route.get("/", FichierPatientController.GetAllData);
route.get("/:id", FichierPatientController.FindDataById);
route.post("/add", FichierPatientController.AddData);
route.put("/:id", FichierPatientController.UpdateData);
route.delete("/:id", FichierPatientController.DeleteData);

module.exports = route;
