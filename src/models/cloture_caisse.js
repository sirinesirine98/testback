const mongoose = require("mongoose");

const ClotureCaisseSchema = new mongoose.Schema({ 
    date_cloture: { type: Date,  default: null },
    });
const ClotureCaisse = mongoose.model('ClotureCaisse', ClotureCaisseSchema);
module.exports = ClotureCaisse;


 