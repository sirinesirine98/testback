
const express = require("express");
const SpermogrammePMAController = require('../controllers/spermogramme');

const route = express.Router();

route.get("/spermogramme", SpermogrammePMAController.spermogramme);

module.exports = route;
