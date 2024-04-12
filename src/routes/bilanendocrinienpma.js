const express = require("express");
const BilanEndocrinienPMAController = require('../controllers/bilanendocrinienpma');

const route = express.Router();

route.get("/bilanendocrinienpma", BilanEndocrinienPMAController.bilanendocrinienpma);

module.exports = route;
