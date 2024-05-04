

const express = require("express");
const SousCategorieController = require("../controllers/souscategorie");
const route = express.Router();

route.get("/", SousCategorieController.GetAllData);
route.get("/:id", SousCategorieController.FindDataById);
route.post("/add", SousCategorieController.AddData);
route.put("/:id", SousCategorieController.UpdateData);
route.delete("/:id", SousCategorieController.DeleteData);

module.exports = route;
