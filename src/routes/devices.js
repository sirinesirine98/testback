const express = require("express");
const DeviceController = require('../controllers/devices');

const route = express.Router();

route.get("/devices", DeviceController.devices);


module.exports = route