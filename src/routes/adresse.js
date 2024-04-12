const express = require("express");
const AdresseController = require('../controllers/adresse');

const route = express.Router();

route.get("/adresse", AdresseController.adresse);

module.exports = route;
