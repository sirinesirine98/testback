

const express = require("express");
const RDVController = require("../controllers/rdv");
const route = express.Router();

route.get("/", RDVController.GetAllData);
route.get("/:id", RDVController.FindDataById);
route.post("/add", RDVController.AddData);
route.put("/:id", RDVController.UpdateData);
route.delete("/:id", RDVController.DeleteData);

module.exports = route;
