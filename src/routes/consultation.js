const express = require("express");
const ConsultationController = require('../controllers/consultation');

const route = express.Router();

route.get("/consultation", ConsultationController.consultation);

module.exports = route