const mongoose = require("mongoose");

const TraitementPMASchema = new mongoose.Schema({
    valeur: { type: String, required: true },
    traitement: { type: String, required: true },
    suivi: { type: String, required: true },
    rang: { type: String, required: true },

});

const TraitementPMA = mongoose.model('TraitementPMA', TraitementPMASchema);

module.exports = TraitementPMA;
