const mongoose = require("mongoose");

const AnalyseBiologiqueSchema = new mongoose.Schema({
    compte: { type: String, maxlength: 128, required: true },//Foreign key
    libelle: { type: String, maxlength: 128, required: true },
    code: { type: String, maxlength: 32, required: true },
    type: { type: String,  required: true },
    unite: { type: String, maxlength: 32, default: null , required: false },
    modele_resultat: { type: String, default: null , required: false },
    ordre: { type: Number, default: 1000, required: true }
});
const AnalyseBiologique = mongoose.model('AnalyseBiologique', AnalyseBiologiqueSchema);
module.exports = AnalyseBiologique;
