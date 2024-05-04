const mongoose = require("mongoose");

const TraitementSchema = new mongoose.Schema({
    compte: { type: String ,required: true },
    libelle: { type: String ,required: true },
    forme: { type: String ,required: true },
    texte: { type: String ,required: true },
});

const Traitement = mongoose.model('Traitement', TraitementSchema);

module.exports = Traitement;
