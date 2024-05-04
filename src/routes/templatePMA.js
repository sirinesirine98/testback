

const express = require("express");
const TemplatePMAController = require("../controllers/templatePMA");
const route = express.Router();

route.get("/", TemplatePMAController.GetAllData);
route.get("/:id", TemplatePMAController.FindDataById);
route.post("/add", TemplatePMAController.AddData);
route.put("/:id", TemplatePMAController.UpdateData);
route.delete("/:id", TemplatePMAController.DeleteData);

module.exports = route;
