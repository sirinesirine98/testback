const express = require("express");
const FactureController = require('../controllers/facture');

const route = express.Router();

route.get("/facture", FactureController.facture);


module.exports = route