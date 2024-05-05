const mongoose = require("mongoose");

const ProfilSchema = new mongoose.Schema({
    user: { type: String, required: true },
    compte: { type: String, required: true },
    titre: {        type: String,        required: true    },//['dr', 'pr', 'mme', 'mlle', 'mr']
    code_conventionnel: { type: String, maxlength: 128, default: null },
    date_naissance: { type: Date, default: null },
    telephone_principal: { type: String, maxlength: 20, default: null },
    telephone_secondaire: { type: String, maxlength: 20, default: null },
    signature: { type: String, default: null }, // Assuming the signature is stored as a file path
    ajouter_signature_edition: { type: Boolean, default: true },
    code_securite_sociale: { type: String, maxlength: 128, default: null },
    enligne: { type: Number, default: 0 },
    default_device: { type: String, default: null },
});

const Profil = mongoose.model('Profil', ProfilSchema);

module.exports = Profil;
