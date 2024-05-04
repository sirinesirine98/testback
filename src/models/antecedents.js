const mongoose = require("mongoose");

const AntecedentSchema = new mongoose.Schema({
    sous_categorie: { type: String, maxlength: 128, required: true }, 
    patient: { type: String, maxlength: 128, required: true }, //Foregin
    date: { type: Date,  default: null },
    texte: { type: String,  required: true },
 });
const Antecedent = mongoose.model('Antecedent', AntecedentSchema);
module.exports = Antecedent;


 