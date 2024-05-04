const mongoose = require("mongoose");

const InterrogatoirePMASchema = new mongoose.Schema({
    patient: { type: String,  required: true },
    praticien: { type: String, default: null },
    text: { type: String, maxlength:128},
    date: { type: Date, default: Date.now },
    type_infertilite: { type: String, maxlength:128 },// Liste 'Primaire', 'Secondaire'
    duree_infertilite: { type: Number, default: null },
    duree_infertilite_mois: { type: Number, default: null },
    duree_desir_gross: { type: Number, default: null },
    gross_nb: { type: Number, default: null },
    gross_dt: { type: String, maxlength: 128, default: null },
    enfants_nb: { type: Number, default: null },
    enfants_dt: { type: String, maxlength: 128, default: null },
    geu_nb: { type: Number, default: null },
    geu_dt: { type: String, maxlength: 128, default: null },
    avort_nb: { type: Number, default: null },
    avort_dt: { type: String, maxlength: 128, default: null },
    technique: { type: String, maxlength: 32 }, //select liste : 'IAC', 'FIV', 'DPI', 'ICSI', 'Freeze all', 'Préservation de la fertilité'
    exam_echo: { type: String, default: null },
    exam_hsg: { type: String, default: null },
    exam_hsc: { type: String, default: null },
    exam_coelioscopie: { type: String, default: null },
    exam_tpc: { type: String, default: null },
    antec_medicaux: { type: String, default: null },
    antec_chirugicaux: { type: String, default: null },
    antec_familiaux: { type: String, default: null },
    antec_tabac: { type: String, default: null },
    antec_alcool: { type: String, default: null },
    sperme_normal: { type: Boolean, default: false },
    sperme_oats_o: { type: Boolean, default: false },
    sperme_oats_a: { type: Boolean, default: false },
    sperme_oats_t: { type: Boolean, default: false },
    sperme_oat_gravite: { type: String, maxlength: 32 }, //  ['Modérée', 'Sévère']
    sperme_azoospermie: { type: Boolean, default: false },
    sperme_azoo_gravite: { type: String, maxlength: 32  }, //['Obstructive', 'Non obstructive']
    sperme_congenalation: { type: Boolean, default: false },
    sperme_congenalation_clinique: { type: String,  default: null },
    nb_paillettes: { type: Number, default: null },
    rendement: { type: String, maxlength: 32, default: null  },//['bon', 'mauvais']
    echo_testiculaire: { type: Boolean, default: false },
    echo_testiculaire_comment: { type: String, default: null },
    bilan_infect: { type: Boolean, default: false },
    bilan_infect_comment: { type: String, default: null },
    conduite: { type: String, default: null }
});

const InterrogatoirePMA = mongoose.model('InterrogatoirePMA', InterrogatoirePMASchema);

module.exports = InterrogatoirePMA;
