const express = require("express");
const AntecedentsController = require('../controllers/antecedents');

const route = express.Router();

route.get("/antecedents", AntecedentsController.antecedents);

module.exports = route;
