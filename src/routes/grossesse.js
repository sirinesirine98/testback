const express = require("express");
const GrossesseController = require('../controllers/grossesse');

const route = express.Router();

route.get("/grossesse", GrossesseController.grossesse);

module.exports = route