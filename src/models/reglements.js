const mongoose = require("mongoose");

const ReglementSchema = new mongoose.Schema({
    admission: { type: String,  required: true },
    patient: { type: String,  required: true },
    praticien: { type: String,  default: null },
    note: { type: String, default: null },
    mutuelle: { type: Boolean, default: false },
    nom_mutuelle: { type: String, maxlength: 128, default: null },
    espece_payment: { type: Number, default: null },
    cheque_payment: { type: Number, default: null },
    cb_payment: { type: Number, default: null },
    cheque_number: { type: Number, min: 0, default: null },
    titulaire: { type: String, maxlength: 128, default: null },
    date_cheque: { type: Date, default: null },
    cloture: { type: String,  default: null },
    bordereau: { type: String,  default: null },
    date_creation: { type: Date, default: Date.now }
});

const Reglement = mongoose.model('Reglement', ReglementSchema);

module.exports = Reglement;
