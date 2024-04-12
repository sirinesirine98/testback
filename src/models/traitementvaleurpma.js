const mongoose = require("mongoose");

const TraitementValeurPMASchema = new mongoose.Schema({
    valeur: { type: String, maxlength: 512, default: null },
    traitement: { type: mongoose.Schema.Types.ObjectId, ref: 'TraitementPMA', default: null },
    suivi: { type: mongoose.Schema.Types.ObjectId, ref: 'SuiviTraitementPMA', required: true },
    rang: { type: Number, min: 0, default: null }
}, { timestamps: true });

TraitementValeurPMASchema.index({ suivi: 1, rang: 1 });

const TraitementValeurPMA = mongoose.model('TraitementValeurPMA', TraitementValeurPMASchema);

module.exports = TraitementValeurPMA;
