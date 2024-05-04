const mongoose = require("mongoose");

const PrescriptionAnalyseBiologiqueSchema = new mongoose.Schema({
    patient: { type: String, required: true },
    date_prescription: { type: Date, required: true },
    date_resultat: { type: Date, default: null }
});



const PrescriptionAnalyseBiologique = mongoose.model('PrescriptionAnalyseBiologique', PrescriptionAnalyseBiologiqueSchema);

module.exports = PrescriptionAnalyseBiologique;
