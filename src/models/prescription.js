const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
    compte: { type: String,  required: true },
    libelle: { type: String, maxlength: 8},
    categorie: { type: String, maxlength: 8},//liste – Examen complémentaire)
    text: { type: String, maxlength: 8} ,
 });

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;
