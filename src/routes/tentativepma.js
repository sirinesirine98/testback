
const express = require("express");
const TentativePMAController = require('../controllers/tentativepma');

const route = express.Router();

route.get("/tentativepma", TentativePMAController.tentativepma);

module.exports = route;
