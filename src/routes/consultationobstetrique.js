const express = require("express");
const ConsultationObstetriqueController = require('../controllers/consultationobstetrique');

const route = express.Router();

route.get("/consultation-obs", ConsultationObstetriqueController.concultationobs);


module.exports = route