const mongoose = require("mongoose");

const CategorieConsultationSchema = new mongoose.Schema({ 
    libelle: { type: String, maxlength: 128, required: true }, 

 });
const CategorieConsultation = mongoose.model('CategorieConsultation', CategorieConsultationSchema);
module.exports = CategorieConsultation;


 