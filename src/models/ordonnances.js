const mongoose = require("mongoose");

const OrdonnancesSchema = new mongoose.Schema({
    date_ordonnance: { type: Date,  required: true },
    type_ordonnance: { type: String, default: null },//lista
    text: { type: String, maxlength:128, default: null },
    praticien: { type: String, default: null },//constraint
    patient: { type: String, default: null },//constraint
   
});

const Ordonnances = mongoose.model('Ordonnances', OrdonnancesSchema);

module.exports = Ordonnances;


