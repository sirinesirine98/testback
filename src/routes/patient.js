
const express = require("express");
const PatientController = require('../controllers/patient');

const route = express.Router();

route.get("/patient", PatientController.patient);

module.exports = route;
