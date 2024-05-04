const mongoose = require("mongoose");

const CompteSchema = new mongoose.Schema({
    raison_sociale: { type: String, required: true, maxlength: 128 },
    adresse: { type: String, required: true, maxlength: 128 }, // liste mt3 adresse
    telephone: { type: String, maxlength: 20, required: true },
    fax: { type: String, maxlength: 20, default: null },
    email: { type: String, maxlength: 254, default: null },
    langue: { type: String, maxlength: 8, default: "fr" },
    responsable: { type: String, maxlength: 128 ,required: true },//liste users
    categorie_consultation: { type: String, maxlength: 128 ,required: true },//liste:  (   Obstétrique,  Gynécologie,  PMA,  Examen libre,  Cardiologie,  Vasculaire,  Compte-rendu opératoire ) 
    distribution: { type: String, maxlength: 128 ,required: true },//liste   ( gyneco , cardio , Generaliste )
     
     
} );

 
const Compte = mongoose.model('Compte', CompteSchema);

module.exports = Compte;
