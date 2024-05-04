const mongoose = require("mongoose");

const CertificatsSchema = new mongoose.Schema({ 
    date: { type: Date,  default: null },
    duree: { type: Number, maxlength: 128, required: true }, 
    type: { type: String, maxlength: 128, required: true }, //  ( certificat médicale, Certificat médicale de présence , Lettre d’accouchement , Lettre confidentielle, Attestation de grossesse, Certificat médicale fit to fly )
    text: { type: String, maxlength: 50, required: true }, //saisie libre
    praticien: { type: String, maxlength: 128, required: true }, // liste des medecins
    patient: { type: String, maxlength: 128, required: true }, // foreign key
 });
const Certificats = mongoose.model('Certificats', CertificatsSchema);
module.exports = Certificats;


 