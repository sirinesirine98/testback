const express = require("express");
const LigneReglementsController = require('../controllers/lignereglement');

const route = express.Router();

route.get("/lignereglements", LigneReglementsController.lignereglements);


module.exports = route