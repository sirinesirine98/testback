const express = require("express");
const EchoT2Controller = require("../controllers/echot2");
const route = express.Router();

route.get("/", EchoT2Controller.GetAllData);
route.get("/:id", EchoT2Controller.FindDataById);
route.post("/add", EchoT2Controller.AddData);
route.put("/:id", EchoT2Controller.UpdateData);
route.delete("/:id", EchoT2Controller.DeleteData);

module.exports = route;
