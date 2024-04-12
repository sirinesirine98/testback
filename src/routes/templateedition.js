
const express = require("express");
const TemplateEditionController = require('../controllers/templateedition');

const route = express.Router();

route.get("/templateedition", TemplateEditionController.templateedition);

module.exports = route;
