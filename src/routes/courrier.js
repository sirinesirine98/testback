const express = require("express");
const CourrierController = require('../controllers/courrier');

const route = express.Router();

route.get("/hello", CourrierController.courrier);


module.exports = route