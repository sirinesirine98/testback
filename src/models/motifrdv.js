const mongoose = require("mongoose");

const MotifRDVSchema = new mongoose.Schema({
    libelle: { type: String, required: true },
    
});

const MotifRDV = mongoose.model('MotifRDV', MotifRDVSchema);

module.exports = MotifRDV;
