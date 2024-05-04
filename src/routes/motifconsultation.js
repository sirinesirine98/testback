

const express = require("express");
const MotifConsultationController = require("../controllers/motifconsultation");
const route = express.Router();

route.get("/", MotifConsultationController.GetAllData);
route.get("/:id", MotifConsultationController.FindDataById);
route.post("/add", MotifConsultationController.AddData);
route.put("/:id", MotifConsultationController.UpdateData);
route.delete("/:id", MotifConsultationController.DeleteData);

module.exports = route;
