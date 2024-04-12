
const express = require("express");
const TraitementPMAController = require('../controllers/traitementpma');

const route = express.Router();

route.get("/traitementpma", TraitementPMAController.traitementpma);

module.exports = route;
