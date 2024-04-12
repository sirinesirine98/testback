const express = require("express");
const PraticienController = require('../controllers/praticien');

const route = express.Router();

route.get("/praticien", PraticienController.praticien);

module.exports = route;
