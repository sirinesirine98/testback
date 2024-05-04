const mongoose = require("mongoose");

const SousCategorieSchema = new mongoose.Schema({
    libelle: { type: String, required: true },
    categorie: { type: String, required: true },
 });

const SousCategorie = mongoose.model('SousCategorie', SousCategorieSchema);

module.exports = SousCategorie;
