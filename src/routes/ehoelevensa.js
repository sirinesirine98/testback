const express = require("express");
const EchoElevenController = require('../controllers/ehoelevensa');

const route = express.Router();

route.get("/echoelevensa", EchoElevenController.echoelevensa);


module.exports = route