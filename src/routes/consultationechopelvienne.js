const express = require("express");
const ConsultationEchoPelvienneController = require("../controllers/consultationechopelvienne");
const route = express.Router();

route.get("/", ConsultationEchoPelvienneController.GetAllData);
route.get("/:id", ConsultationEchoPelvienneController.FindDataById);
route.post("/add", ConsultationEchoPelvienneController.AddData);
route.put("/:id", ConsultationEchoPelvienneController.UpdateData);
route.delete("/:id", ConsultationEchoPelvienneController.DeleteData);

module.exports = route;
