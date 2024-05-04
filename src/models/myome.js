const mongoose = require("mongoose");

const MyomeSchema = new mongoose.Schema({
    consultation: { type: String, required: true },
    situation: { type: String, default: null },
    type_figo: { type: String, default: null },
    situation_coupe_longitudinale: { type: String, default: null },
    situation_coupe_transversale: { type: String, default: null },
    contours: { type: String, default: null },
    structure: { type: String, default: null },
    calcifications: { type: String, default: null },
    vascularisation: { type: String, default: null },
    longueur: { type: Number, default: null },
    largeur: { type: Number, default: null },
    hauteur: { type: Number, default: null },
    diametre_moyen: { type: Number, default: null },
    volume: { type: Number, default: null },
    mure_posterieur: { type: Number, default: null }
});

const Myome = mongoose.model('Myome', MyomeSchema);

module.exports = Myome;
