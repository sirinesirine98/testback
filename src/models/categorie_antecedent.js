const mongoose = require("mongoose");

const CategorieAntecedentSchema = new mongoose.Schema({ 
    libelle: { type: String, maxlength: 128, required: true }, 

 });
const CategorieAntecedent = mongoose.model('CategorieAntecedent', CategorieAntecedentSchema);
module.exports = CategorieAntecedent;


 