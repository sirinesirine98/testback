const express = require("express");
const MyomeController = require('../controllers/myome');

const route = express.Router();

route.get("/myome", MyomeController.myome);


module.exports = route