

const express = require("express");
const TraitementsController = require("../controllers/traitements");
const route = express.Router();

route.get("/", TraitementsController.GetAllData);
route.get("/:id", TraitementsController.FindDataById);
route.post("/add", TraitementsController.AddData);
route.put("/:id", TraitementsController.UpdateData);
route.delete("/:id", TraitementsController.DeleteData);

module.exports = route;
