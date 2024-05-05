

const express = require("express");
const WorklisteController = require("../controllers/worklistitem");
const route = express.Router();

route.get("/", WorklisteController.GetAllData);
route.get("/:id", WorklisteController.FindDataById);
route.post("/add", WorklisteController.AddData);
route.put("/:id", WorklisteController.UpdateData);
route.delete("/:id", WorklisteController.DeleteData);

module.exports = route;
