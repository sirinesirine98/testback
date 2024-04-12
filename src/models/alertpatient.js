const { Schema, model } = require('mongoose');

// Définition du schéma AlertePatient
const AlertePatientSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    text: { type: String, maxlength: 512, required: true },
    lien: { type: String, maxlength: 512, required: true }
}, { timestamps: true });

// Définition du modèle AlertePatient
const AlertePatient = model('AlertePatient', AlertePatientSchema);

// Export du modèle
module.exports = AlertePatient;
