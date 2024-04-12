const mongoose = require("mongoose");

const PrescriptionAnalyseBiologiqueSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    analyses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique', required: true }],
    date_prescription: { type: Date, required: true },
    date_resultat: { type: Date, default: null }
}, { timestamps: true });

PrescriptionAnalyseBiologiqueSchema.virtual('resultats_display').get(function () {
    const resultats = this.resultatanalysebiologique_set;
    if (!resultats || resultats.length === 0) {
        return 'Pas de résultats saisis';
    }
    let str = '';
    resultats.forEach(res => {
        str += `<strong>${res.analyse.libelle}</strong>:`;
        if (res.valeur && res.valeur !== '') {
            const val = res.valeur.replace('\n', '<br>');
            str += `<br>${val}<br><br>`;
        } else {
            str += ' - <br><br>';
        }
    });
    return str;
});

PrescriptionAnalyseBiologiqueSchema.virtual('titre').get(function () {
    return this.date_resultat ? "Résultat" : "Prescription";
});

const PrescriptionAnalyseBiologique = mongoose.model('PrescriptionAnalyseBiologique', PrescriptionAnalyseBiologiqueSchema);

module.exports = PrescriptionAnalyseBiologique;
