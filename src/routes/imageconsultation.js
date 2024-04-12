const express = require("express");
const ImageConsultationController = require('../controllers/imageconsultation');

const route = express.Router();

route.get("/imageconsultation", ImageConsultationController.imageconsultation);


module.exports = route