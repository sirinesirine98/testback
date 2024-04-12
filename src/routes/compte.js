const express = require("express");
const CompteController = require('../controllers/compte');

const route = express.Router();

route.get("/compte", CompteController.compte);

module.exports = route;
