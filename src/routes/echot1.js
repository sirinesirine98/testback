const express = require("express");
const EchoT1Controller = require("../controllers/echot1");
const route = express.Router();

route.get("/", EchoT1Controller.GetAllData);
route.get("/:id", EchoT1Controller.FindDataById);
route.post("/add", EchoT1Controller.AddData);
route.put("/:id", EchoT1Controller.UpdateData);
route.delete("/:id", EchoT1Controller.DeleteData);

module.exports = route;
