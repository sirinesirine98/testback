const mongoose = require("mongoose");

const DossierPatientSchema = new mongoose.Schema({
    nom: {type: String, require: true, unique: true},
 });
module.exports = mongoose.model('DossierPatient',  DossierPatientSchema);