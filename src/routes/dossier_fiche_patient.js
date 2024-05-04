const express = require("express");
const DossierFichePatientController = require("../controllers/dossier_fiche_patient");
const route = express.Router();

route.get("/", DossierFichePatientController.GetAllData);
route.get("/:id", DossierFichePatientController.FindDataById);
route.post("/add", DossierFichePatientController.AddData);
route.put("/:id", DossierFichePatientController.UpdateData);
route.delete("/:id", DossierFichePatientController.DeleteData);

module.exports = route;
