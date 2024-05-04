

const express = require("express");
const PrescriptionController = require("../controllers/prescription");
const route = express.Router();

route.get("/", PrescriptionController.GetAllData);
route.get("/:id", PrescriptionController.FindDataById);
route.post("/add", PrescriptionController.AddData);
route.put("/:id", PrescriptionController.UpdateData);
route.delete("/:id", PrescriptionController.DeleteData);

module.exports = route;
