const mongoose = require("mongoose");

const AnalyseBiologiqueSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    libelle: { type: String, maxlength: 128, required: true },
    code: { type: String, maxlength: 32, required: true },
    type: { type: String, enum: ['text', 'number'], required: true },
    unite: { type: String, maxlength: 32, default: '', required: false },
    modele_resultat: { type: String, default: '', required: false },
    ordre: { type: Number, default: 1000, required: true }
}, { timestamps: true });

// Définition du modèle AnalyseBiologique
const AnalyseBiologique = mongoose.model('AnalyseBiologique', AnalyseBiologiqueSchema);

// Export du modèle
module.exports = AnalyseBiologique;
