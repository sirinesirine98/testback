
const mongoose = require("mongoose");

const MotifAbsenceSchema = new mongoose.Schema({
    compte: { type: String, maxlength: 128, default: null },
    motif: { type: String, maxlength: 128, default: null },
     
});

const MotifAbsence = mongoose.model('MotifAbsence', MotifAbsenceSchema);

module.exports = MotifAbsence;

