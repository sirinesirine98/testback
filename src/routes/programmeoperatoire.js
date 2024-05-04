

const express = require("express");
const ProgrammeOperatoireController = require("../controllers/programmeoperatoire");
const route = express.Router();

route.get("/", ProgrammeOperatoireController.GetAllData);
route.get("/:id", ProgrammeOperatoireController.FindDataById);
route.post("/add", ProgrammeOperatoireController.AddData);
route.put("/:id", ProgrammeOperatoireController.UpdateData);
route.delete("/:id", ProgrammeOperatoireController.DeleteData);

module.exports = route;
