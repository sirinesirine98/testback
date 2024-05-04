const express = require("express");
const ConsultationEchoCroissanceController = require("../controllers/consultationechocroissance");
const route = express.Router();

route.get("/", ConsultationEchoCroissanceController.GetAllData);
route.get("/:id", ConsultationEchoCroissanceController.FindDataById);
route.post("/add", ConsultationEchoCroissanceController.AddData);
route.put("/:id", ConsultationEchoCroissanceController.UpdateData);
route.delete("/:id", ConsultationEchoCroissanceController.DeleteData);

module.exports = route;
