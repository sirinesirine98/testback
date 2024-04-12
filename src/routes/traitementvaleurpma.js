

const express = require("express");
const TraitementValeurPMAController = require('../controllers/traitementvaleurpma');

const route = express.Router();

route.get("/traitementvaleurpma", TraitementValeurPMAController.traitementvaleurpma);


module.exports = route