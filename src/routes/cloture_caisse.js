const express = require("express");
const ClotureCaisseController = require("../controllers/cloture_caisse");
const route = express.Router();

route.get("/", ClotureCaisseController.GetAllData);
route.get("/:id", ClotureCaisseController.FindDataById);
route.post("/add", ClotureCaisseController.AddData);
route.put("/:id", ClotureCaisseController.UpdateData);
route.delete("/:id", ClotureCaisseController.DeleteData);

module.exports = route;
