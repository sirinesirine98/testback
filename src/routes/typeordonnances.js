

const express = require("express");
const TypeordonnanceController = require("../controllers/typeordonnances");
const route = express.Router();

route.get("/", TypeordonnanceController.GetAllData);
route.get("/:id", TypeordonnanceController.FindDataById);
route.post("/add", TypeordonnanceController.AddData);
route.put("/:id", TypeordonnanceController.UpdateData);
route.delete("/:id", TypeordonnanceController.DeleteData);

module.exports = route;
