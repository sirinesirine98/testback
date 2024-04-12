const express = require("express");
const AnalyseBiologiqueController = require('../controllers/analysebiologique');

const route = express.Router();

route.get("/analysebiologique", AnalyseBiologiqueController.analysebiologique);

module.exports = route;
