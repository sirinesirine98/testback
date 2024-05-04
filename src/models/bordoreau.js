const mongoose = require("mongoose");

const BordoreauSchema = new mongoose.Schema({
    borderaux_id: { type: Number, maxlength: 128, required: true },  //id
    nom_medecin: { type: String, maxlength: 128, required: true }, //Foregin
    code_conventiel: { type: String, maxlength: 128, required: true }, 
    date_bordoreau: { type: Date,  default: null },

 });
const Bordoreau = mongoose.model('Bordoreau', BordoreauSchema);
module.exports = Bordoreau;


 