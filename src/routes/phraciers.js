

const express = require("express");
const PhracierController = require("../controllers/phraciers");
const route = express.Router();

route.get("/", PhracierController.GetAllData);
route.get("/:id", PhracierController.FindDataById);
route.post("/add", PhracierController.AddData);
route.put("/:id", PhracierController.UpdateData);
route.delete("/:id", PhracierController.DeleteData);

module.exports = route;
