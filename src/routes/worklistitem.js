


const express = require("express");
const WorkListItemController = require('../controllers/worklistitem');

const route = express.Router();

route.get("/worklistitem", WorkListItemController.worklistitem);


module.exports = route