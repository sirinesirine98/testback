

const express = require("express");
const OrdonnancesController = require("../controllers/ordonnances");
const route = express.Router();

route.get("/", OrdonnancesController.GetAllData);
route.get("/:id", OrdonnancesController.FindDataById);
route.post("/add", OrdonnancesController.AddData);
route.put("/:id", OrdonnancesController.UpdateData);
route.delete("/:id", OrdonnancesController.DeleteData);

module.exports = route;
