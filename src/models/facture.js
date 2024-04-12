const mongoose = require("mongoose");

const FactureSchema = new mongoose.Schema({
    reglement: { type: mongoose.Schema.Types.ObjectId, ref: 'Reglement', required: true }
}, { timestamps: true });

const Facture = mongoose.model('Facture', FactureSchema);

module.exports = Facture;
