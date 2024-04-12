const express = require("express");
const RdvController = require('../controllers/rdv');

const router = express.Router();

router.get("/rdv", RdvController.getRdv);


module.exports = router;


