const express = require("express");
const ParamCompteController = require('../controllers/parametrecompte');

const route = express.Router();

route.get("/parametre-compte", ParamCompteController.paramcompte);

module.exports = route