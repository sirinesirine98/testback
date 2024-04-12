const express = require("express");
const InterrogatoirePMAController = require('../controllers/interrogatoirepma');

const route = express.Router();

route.get("/interrogatoirepma", InterrogatoirePMAController.interrogatoirepma);


module.exports = route