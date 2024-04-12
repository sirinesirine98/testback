const express = require("express");
const ConsultationColposcopieController = require('../controllers/consultationcolposcopie');

const route = express.Router();

route.get("/consultation-colposcopie", ConsultationColposcopieController.constcolposcopie);


module.exports = route