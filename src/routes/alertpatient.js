const express = require("express");
const AlertPatientController = require('../controllers/alertpatient');

const route = express.Router();

route.get("/alertpatient", AlertPatientController.alertpatient);

module.exports = route;
