const mongoose = require("mongoose");

const FichierPatientSchema = new mongoose.Schema({
    nom: { type: String, maxlength:128,required: true },
    dossier: { type: String, maxlength:128, required: true }, //liste :  (  Administratif, Laboratoire/Biologie, Radiologie, Laboratoire/Anapath, CR opératoire, Autres)
    fichier: { type: String, maxlength:128,  },//upload file
    patient: { type: String, maxlength:128, required: true }, //constraint
    date: { type: Date},
  
});

const FichierPatient = mongoose.model('FichierPatient', FichierPatientSchema);

module.exports = FichierPatient;
