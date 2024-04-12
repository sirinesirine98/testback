const express = require("express");
const ConsultationGynecologiqueController = require('../controllers/consultationgynecologique');

const route = express.Router();

route.get("/consultation-gyneco", ConsultationGynecologiqueController.concultationgynecol);


module.exports = route