const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
    numero: { type: Number, default: null },
    date: { type: Date,  default: null },
    dateconsultation: { type: Date,  default: null },
    patient: { type: String, maxlength: 128, default: null }, //Foreginkey
    praticien: { type: String, maxlength: 128, default: null }, //Foreginkey
    motif: { type: String, maxlength: 128, default: null }, //( Consultation , Examen , Contrôle )
    status: { type: String, maxlength: 128, default: null }, // ( En attente , en consultation , Consultation terminé , autre )
 
});



const Admission = mongoose.model('Admission', AdmissionSchema);

module.exports = Admission;
