const mongoose = require('mongoose');

const ResultatAnalyseBiologiqueSchema = new mongoose.Schema({
    analyse: { type: String,  required: true },
    prescription: { type: String,  required: true },
    date: { type: Date, default: null },
    valeur: { type: String, default: null },
    observation: { type: String, default: null },
    valeur_anormale: { type: Boolean, default: false }
}, { timestamps: true });

 

const ResultatAnalyseBiologique = mongoose.model('ResultatAnalyseBiologique', ResultatAnalyseBiologiqueSchema);


module.exports = ResultatAnalyseBiologique;
