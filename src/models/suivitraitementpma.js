const mongoose = require("mongoose");

const SuiviTraitementPMASchema = new mongoose.Schema({
    tentative: { type: String,  required: true },
    date: { type: Date, default: null },
    traitments_valeurs: { type: String,  },
    oestradiol: { type: String, maxlength: 512, default: null },
    lh: { type: String, maxlength: 512, default: null },
    progesterone: { type: String, maxlength: 512, default: null },
    ovaire_droit: { type: String, maxlength: 512, default: null },
    ovaire_gauche: { type: String, maxlength: 512, default: null },
    endometre: { type: String, maxlength: 512, default: null }
}, { timestamps: true });

const SuiviTraitementPMA = mongoose.model('SuiviTraitementPMA', SuiviTraitementPMASchema);

module.exports = SuiviTraitementPMA;
