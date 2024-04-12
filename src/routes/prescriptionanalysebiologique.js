


const express = require("express");
const PrescriptionAnalyseBiologiqueController = require('../controllers/prescriptionanalysebiologique');

const route = express.Router();

route.get("/prescriptionanalysebiologique", PrescriptionAnalyseBiologiqueController.prescriptionanalysebiologique);

module.exports = route;
