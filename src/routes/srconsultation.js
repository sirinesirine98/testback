
const express = require("express");
const SRConsultationController = require('../controllers/srconsultation');

const route = express.Router();

route.get("/srconsultation", SRConsultationController.srconsultation);

module.exports = route;
