 const mongoose = require("mongoose");

const FormuleConsultationSchema = new mongoose.Schema({
    consultation: { type: String, maxlength:128,required: true },
    edition: { type: String, maxlength:128, required: true }
  
});

const FormuleConsultation = mongoose.model('FormuleConsultation', FormuleConsultationSchema);

module.exports = FormuleConsultation;
