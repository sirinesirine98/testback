const express = require("express");
const EtablissementController = require('../controllers/etablissement');

const route = express.Router();

route.get("/etablissement", EtablissementController.etablissement);


module.exports = route