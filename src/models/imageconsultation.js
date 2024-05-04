const mongoose = require("mongoose");

const ImageConsultationSchema = new mongoose.Schema({
    image: { type: String, required: true },//upload file
    type: { type: String, required: true }, // (liste Graphique, Echographie )
    consultation: { type: String, maxlength:128, required: true }, //(liste motif consultation lkol)
    date: { type: Date, required: true },
    impression: { type: Boolean, default: false } //checkbox
}, { timestamps: true });

const ImageConsultation = mongoose.model('ImageConsultation', ImageConsultationSchema);

module.exports = ImageConsultation;

