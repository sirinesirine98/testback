

const express = require("express");
const PrescriptionAnalysesController = require("../controllers/PrescriptionAnalysess");
const route = express.Router();

route.get("/", PrescriptionAnalysesController.GetAllData);
route.get("/:id", PrescriptionAnalysesController.FindDataById);
route.post("/add", PrescriptionAnalysesController.AddData);
route.put("/:id", PrescriptionAnalysesController.UpdateData);
route.delete("/:id", PrescriptionAnalysesController.DeleteData);

module.exports = route;
