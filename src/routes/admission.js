

const express = require("express");
const AdmissionController = require("../controllers/admission");
const route = express.Router();

route.get("/", AdmissionController.GetAllData);
route.get("/:id", AdmissionController.FindDataById);
route.post("/add", AdmissionController.AddData);
route.put("/:id", AdmissionController.UpdateData);
route.delete("/:id", AdmissionController.DeleteData);

module.exports = route;
