const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
    motif: {  type: String, maxlength: 128,  default: null }, //(  Consultation grossesse,  Consultation gynécologique,  Consultation PMA,  Consultation libre,  Coloposcopie,  Echographie pelvienne,  Echo &lt; 11 SA,  Echo 1er trimestre,  Echo 2ème trimestre,  Echo 3ème trimestre, Echo de croissance,  Echo du col,  Echo cardiofoetale,  Consultation grossesse,  Compte-rendu opératoire,  Interrogatoire PMA,  Monitorage PMA,  Consultation gynécologique libre,  Consultation obstétrique libre ) 
    patient: {  type: String, maxlength: 128,  default: null},
    date: { type: Date, default: Date.now },
    praticien: {  type: String, maxlength: 128,  default: null },
    conclusion: {   type: String, maxlength: 128,  default: null },
    conduite: {  type: String, maxlength: 128,  default: null}
});

module.exports = mongoose.model('Consultation', ConsultationSchema);


 