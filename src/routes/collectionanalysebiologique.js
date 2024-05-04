const express = require("express");
const CollectionAnalysesController = require("../controllers/collectionanalysebiologique");
const route = express.Router();

route.get("/", CollectionAnalysesController.GetAllData);
route.get("/:id", CollectionAnalysesController.FindDataById);
route.post("/add", CollectionAnalysesController.AddData);
route.put("/:id", CollectionAnalysesController.UpdateData);
route.delete("/:id", CollectionAnalysesController.DeleteData);

module.exports = route;
