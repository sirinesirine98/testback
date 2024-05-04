

const express = require("express");
const SuivisTraitementPMAController = require("../controllers/suivitraitementpma");
const route = express.Router();

route.get("/", SuivisTraitementPMAController.GetAllData);
route.get("/:id", SuivisTraitementPMAController.FindDataById);
route.post("/add", SuivisTraitementPMAController.AddData);
route.put("/:id", SuivisTraitementPMAController.UpdateData);
route.delete("/:id", SuivisTraitementPMAController.DeleteData);

module.exports = route;
