const express = require("express");
const CategorieAntecedentController = require("../controllers/categorie_antecedent");
const route = express.Router();

route.get("/", CategorieAntecedentController.GetAllData);
route.get("/:id", CategorieAntecedentController.FindDataById);
route.post("/add", CategorieAntecedentController.AddData);
route.put("/:id", CategorieAntecedentController.UpdateData);
route.delete("/:id", CategorieAntecedentController.DeleteData);

module.exports = route;
