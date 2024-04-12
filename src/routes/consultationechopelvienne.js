const express = require("express");
const EchoPelvienneController = require('../controllers/consultationechopelvienne');

const route = express.Router();

route.get("/echo-pelvienne", EchoPelvienneController.constechopelvienne);

module.exports = route