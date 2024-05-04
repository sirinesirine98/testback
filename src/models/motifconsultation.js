
const mongoose = require("mongoose");

const MotifConsultationSchema = new mongoose.Schema({
    libelle: { type: String, maxlength: 128, default: null },//champs libre
    code: { type: String, maxlength: 128, default: null }, //champs libre
    categorie: { type: String, maxlength: 128, default: null },  //(liste :  Obstétrique, Gynécologie, PMA, Examen libre, Cardiologie, Vasculaire, Compte-rendu opératoire )
     
});

const MotifConsultation = mongoose.model('MotifConsultation', MotifConsultationSchema);

module.exports = MotifConsultation;

