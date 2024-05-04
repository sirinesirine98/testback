const mongoose = require("mongoose");

const TypeOrdonnanceSchema = new mongoose.Schema({
    compte: { type: String, maxlength: 512, default: null },
    libelle: { type: String,  default: null },
    modele: { type: String,  required: true },
 });

 
const TypeOrdonnance = mongoose.model('TypeOrdonnance', TypeOrdonnanceSchema);

module.exports = TypeOrdonnance;
