

const express = require("express");
const ParametresCompteController = require("../controllers/parametrecompte");
const route = express.Router();

route.get("/", ParametresCompteController.GetAllData);
route.get("/:id", ParametresCompteController.FindDataById);
route.post("/add", ParametresCompteController.AddData);
route.put("/:id", ParametresCompteController.UpdateData);
route.delete("/:id", ParametresCompteController.DeleteData);

module.exports = route;
