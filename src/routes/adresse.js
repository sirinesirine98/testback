

const express = require("express");
const AdresseController = require("../controllers/adresse");
const route = express.Router();

route.get("/", AdresseController.GetAllData);
route.get("/:id", AdresseController.FindDataById);
route.post("/add", AdresseController.AddData);
route.put("/:id", AdresseController.UpdateData);
route.delete("/:id", AdresseController.DeleteData);

module.exports = route;
