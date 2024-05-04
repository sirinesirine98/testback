const express = require("express");
const EchoT3Controller = require("../controllers/echot3");
const route = express.Router();

route.get("/", EchoT3Controller.GetAllData);
route.get("/:id", EchoT3Controller.FindDataById);
route.post("/add", EchoT3Controller.AddData);
route.put("/:id", EchoT3Controller.UpdateData);
route.delete("/:id", EchoT3Controller.DeleteData);

module.exports = route;
