const mongoose = require("mongoose");

const LigneReglementSchema = new mongoose.Schema({
    prestation: { type: String, maxlength: 128, default: null },//champs libre
    code: { type: String, maxlength: 128, default: null },
    prix_ttc: { type: Number, default: null }, // Montant ticket modérateur
    prix_initial: { type: Number, default: null }, // Montant total = montant prise en charge + ticket modérateur
    reglement: { type: String, maxlength:128, required: true }//liste
}, { timestamps: true });

const LigneReglement = mongoose.model('LigneReglement', LigneReglementSchema);

module.exports = LigneReglement;
