

const express = require("express");
const MotifRDVController = require("../controllers/motifrdv");
const route = express.Router();

route.get("/", MotifRDVController.GetAllData);
route.get("/:id", MotifRDVController.FindDataById);
route.post("/add", MotifRDVController.AddData);
route.put("/:id", MotifRDVController.UpdateData);
route.delete("/:id", MotifRDVController.DeleteData);

module.exports = route;
