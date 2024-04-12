const express = require("express");
const InformationConjointController = require('../controllers/informationconjoint');

const route = express.Router();

route.get("/informationconjoint", InformationConjointController.informationconjoint);


module.exports = route