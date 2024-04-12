
const express = require("express");
const ReglementsController = require('../controllers/reglements');

const route = express.Router();

route.get("/reglements", ReglementsController.reglements);

module.exports = route;
