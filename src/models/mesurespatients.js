
const mongoose = require("mongoose");

const MesuresPatientSchema = new mongoose.Schema({
    date: { type: Date} ,
    patient: { type: String, maxlength: 128, default: null },//liste
    ta: { type: Number, default: null }, 
    temperature: { type: Number, default: null }, 
    poids: { type: Number, default: null }, 
    gly: { type: Number, default: null }, 
});

const MesuresPatient = mongoose.model('MesuresPatient', MesuresPatientSchema);

module.exports = MesuresPatient;

