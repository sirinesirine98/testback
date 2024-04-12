
const express = require("express");
const ProfileController = require('../controllers/profile');

const route = express.Router();

route.get("/profile", ProfileController.profile);

module.exports = route;
