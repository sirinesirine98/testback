const express = require("express");
const DonneesFoetusController = require("../controllers/donnesfoetus");
const route = express.Router();

route.get("/", DonneesFoetusController.GetAllData);
route.get("/:id", DonneesFoetusController.FindDataById);
route.post("/add", DonneesFoetusController.AddData);
route.put("/:id", DonneesFoetusController.UpdateData);
route.delete("/:id", DonneesFoetusController.DeleteData);

module.exports = route;
