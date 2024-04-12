
const express = require("express");
const TentativeHistoriquePMAController = require('../controllers/tentativehistoriquepma');

const route = express.Router();

route.get("/tentativehistoriquepma", TentativeHistoriquePMAController.tentativehistoriquepma);

module.exports = route;
