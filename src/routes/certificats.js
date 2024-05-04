const express = require("express");
const CertificatsController = require("../controllers/certificats");
const route = express.Router();

route.get("/", CertificatsController.GetAllData);
route.get("/:id", CertificatsController.FindDataById);
route.post("/add", CertificatsController.AddData);
route.put("/:id", CertificatsController.UpdateData);
route.delete("/:id", CertificatsController.DeleteData);

module.exports = route;
