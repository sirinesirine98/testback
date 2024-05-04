const express = require("express");
const CategorieConsultationController = require("../controllers/categorie_consultation");
const route = express.Router();

route.get("/", CategorieConsultationController.GetAllData);
route.get("/:id", CategorieConsultationController.FindDataById);
route.post("/add", CategorieConsultationController.AddData);
route.put("/:id", CategorieConsultationController.UpdateData);
route.delete("/:id", CategorieConsultationController.DeleteData);

module.exports = route;
