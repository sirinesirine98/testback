const mongoose = require('mongoose');

const ResultatAnalyseBiologiqueSchema = new mongoose.Schema({
    analyse: { type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique', required: true },
    prescription: { type: mongoose.Schema.Types.ObjectId, ref: 'PrescriptionAnalyseBiologique', required: true },
    date: { type: Date, default: null },
    valeur: { type: String, default: null },
    observation: { type: String, default: null },
    valeur_anormale: { type: Boolean, default: false }
}, { timestamps: true });

ResultatAnalyseBiologiqueSchema.virtual('resultat_display').get(function () {
    let str = '';
    if (this.valeur) {
        const val = this.valeur.includes('\n') ? this.valeur.replace(/\n/g, '<br>') : this.valeur;
        str = `<br>${val}<br><br>`;
    }
    return str;
});

const ResultatAnalyseBiologique = mongoose.model('ResultatAnalyseBiologique', ResultatAnalyseBiologiqueSchema);


module.exports = ResultatAnalyseBiologique;
