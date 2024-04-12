const express = require("express");
const DonnesFoetusController = require('../controllers/donnesfoetus');

const route = express.Router();

route.get("/foetus", DonnesFoetusController.foetus);


module.exports = route