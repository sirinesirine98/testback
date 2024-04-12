
const express = require("express");
const ResultatAnalyseBiologiqueController = require('../controllers/resultatanalysebiologique');

const route = express.Router();

route.get("/resanalysebio", ResultatAnalyseBiologiqueController.resanalysebio);

module.exports = route;
