const mongoose = require("mongoose");

const RdvSchema = new mongoose.Schema({
    compte: { type: String, required: true },
    debut: { type: Date, required: true },
    fin: { type: Date, required: true },
    ancien_debut: { type: Date },
    prenom: { type: String, required: true, maxlength: 128 },
    nom: { type: String, maxlength: 128 },
    nom_naissance: { type: String, maxlength: 128 },
    telephone: { type: String, maxlength: 20 },
    cp: { type: Number },
    ville: { type: String, maxlength: 128 },
    gouvernorat: { type: String, maxlength: 128 },
    motif: { type: String, required: true },
    nouveau: { type: Boolean, default: true },
    observation: { type: String, maxlength: 256 },
    praticien: { type: String },
    statut: { type: String, default: '1' },//liste ['1', '2', '3', '10'] 
    motif_modification: { type: String, maxlength: 128 },
    patient: { type: String },
    patient_rappele: { type: Boolean, default: false }
});

module.exports = mongoose.model('Rdv', RdvSchema);
