

const express = require("express");
const MotifAbsenceController = require("../controllers/motifabsence");
const route = express.Router();

route.get("/", MotifAbsenceController.GetAllData);
route.get("/:id", MotifAbsenceController.FindDataById);
route.post("/add", MotifAbsenceController.AddData);
route.put("/:id", MotifAbsenceController.UpdateData);
route.delete("/:id", MotifAbsenceController.DeleteData);

module.exports = route;
