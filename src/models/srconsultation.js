const mongoose = require("mongoose");

const SRConsultationSchema = new mongoose.Schema({
    consultation: { type:String ,required: true },
    date: { type: Date, required: true },
    data: { type: String, default: null }
}, { timestamps: true });

const SRConsultation = mongoose.model('SRConsultation', SRConsultationSchema);

module.exports = SRConsultation;
