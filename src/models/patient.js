const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    compte: { type: String, required: true },
    civilite: { type: String,  default: 'mme' },//['mme', 'mlle', 'mr']
    prenom: { type: String, required: true },
    nom: { type: String },
    nom_naissance: { type: String },
    sexe: { type: String,  default: 'F' },// F, H
    date_naissance: { type: Date, required: true },
    numero_identite: { type: String },
    code_securite_sociale: { type: String },
    adresse: { type: String, maxlength:128,  },
    email: { type: String },
    telephone: { type: String },
    telephone_secondaire: { type: String },
    telephone_autre: { type: String },
    profession: { type: String },
    observation: { type: String },
    taille: { type: Number },
    poids: { type: Number },
    groupe_sanguin: { type: String, maxlength:12 },//['A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+']
    fumeur: { type: Boolean, default: false },
    nombre_cigarettes: { type: Number },
    origine: { type: String,  },//['1', '2', '3', '4', '10']
    antecedents_familiaux: { type: String },
    antecedents_medico_chirurgicaux: { type: String },
    antecedents_gynecologiques: { type: String },
    antecedents_cardio: { type: String },
    allergies: { type: String },
    praticien_principal: { type: String, maxlength:128  },
    praticiens_correspondants: { type: String, maxlength:128  },
    lieu_accouchement: { type: String, maxlength:128  },
    mot_cle: { type: String },
    notes: { type: String  },
    nouveau: { type: Boolean, default: true }
});

module.exports = mongoose.model('Patient', PatientSchema);
