

const express = require("express");
const TemplateController = require("../controllers/template");
const route = express.Router();

route.get("/", TemplateController.GetAllData);
route.get("/:id", TemplateController.FindDataById);
route.post("/add", TemplateController.AddData);
route.put("/:id", TemplateController.UpdateData);
route.delete("/:id", TemplateController.DeleteData);

module.exports = route;
