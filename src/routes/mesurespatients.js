

const express = require("express");
const MesuresPatientsController = require("../controllers/mesurespatients");
const route = express.Router();

route.get("/", MesuresPatientsController.GetAllData);
route.get("/:id", MesuresPatientsController.FindDataById);
route.post("/add", MesuresPatientsController.AddData);
route.put("/:id", MesuresPatientsController.UpdateData);
route.delete("/:id", MesuresPatientsController.DeleteData);

module.exports = route;
