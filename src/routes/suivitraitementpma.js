
const express = require("express");
const SuiviTraitementPMAController = require('../controllers/suivitraitementpma');

const route = express.Router();

route.get("/suivitraitementpma", SuiviTraitementPMAController.suivitraitementpma);

module.exports = route;
