const express = require("express");
const Echo11SAController = require("../controllers/echo11sa");
const route = express.Router();

route.get("/", Echo11SAController.GetAllData);
route.get("/:id", Echo11SAController.FindDataById);
route.post("/add", Echo11SAController.AddData);
route.put("/:id", Echo11SAController.UpdateData);
route.delete("/:id", Echo11SAController.DeleteData);

module.exports = route;
