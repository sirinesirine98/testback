

const express = require("express");
const FormuleConsultationController = require("../controllers/formuleconsultation");
const route = express.Router();

route.get("/", FormuleConsultationController.GetAllData);
route.get("/:id", FormuleConsultationController.FindDataById);
route.post("/add", FormuleConsultationController.AddData);
route.put("/:id", FormuleConsultationController.UpdateData);
route.delete("/:id", FormuleConsultationController.DeleteData);

module.exports = route;
