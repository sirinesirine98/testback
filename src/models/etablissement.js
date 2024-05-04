const mongoose = require("mongoose");

const EtablissementSchema = new mongoose.Schema({
    compte: { type: String, required: true },
    nom: { type: String, maxlength: 128, required: true },
    telephone: { type: String, maxlength: 20, default: null }
}, { timestamps: true });

const Etablissement = mongoose.model('Etablissement', EtablissementSchema);

module.exports = Etablissement;
