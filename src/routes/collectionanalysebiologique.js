const express = require("express");
const CollectionAnalyseBiologiqueController = require('../controllers/collectionanalysebiologique');

const route = express.Router();

route.get("/collectionanalysebiologique", CollectionAnalyseBiologiqueController.collectionanalysebiologique);

module.exports = route;
