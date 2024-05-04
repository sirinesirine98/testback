const express = require("express");
const BordoreauController = require("../controllers/bordoreau");
const route = express.Router();

route.get("/", BordoreauController.GetAllData);
route.get("/:id", BordoreauController.FindDataById);
route.post("/add", BordoreauController.AddData);
route.put("/:id", BordoreauController.UpdateData);
route.delete("/:id", BordoreauController.DeleteData);

module.exports = route;
