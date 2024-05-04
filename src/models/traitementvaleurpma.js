const mongoose = require("mongoose");

const TraitementValeurPMASchema = new mongoose.Schema({
    valeur: { type: String, maxlength: 512, default: null },
    traitement: { type: String,  default: null },
    suivi: { type: String,  required: true },
    rang: { type: Number, min: 0, default: null }
}, { timestamps: true });

TraitementValeurPMASchema.index({ suivi: 1, rang: 1 });

const TraitementValeurPMA = mongoose.model('TraitementValeurPMA', TraitementValeurPMASchema);

module.exports = TraitementValeurPMA;
