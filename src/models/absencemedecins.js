const mongoose = require("mongoose");

const AbsencemedecinSchema = new mongoose.Schema({
    Compte: { type: String, default: null },
    datedebut: { type: Date, default: null },
    datefin: { type: Date, default: null },
    motif: { type: String, default: null }, // liste ( Semaine , Personnel , voyage , en congé )
    praticien: { type: String, default: null }, // references key
    praticienremplacant: { type: Number, default: null },
  });

const Absencemedecin = mongoose.model('Absencemedecin', AbsencemedecinSchema);

module.exports = Absencemedecin;
