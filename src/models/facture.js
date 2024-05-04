const mongoose = require("mongoose");

const FactureSchema = new mongoose.Schema({
    reglement: { type: String, maxlength:128, required: true }
}, { timestamps: true });

const Facture = mongoose.model('Facture', FactureSchema);

module.exports = Facture;
