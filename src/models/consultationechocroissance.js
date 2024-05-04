const mongoose = require("mongoose");

const ConsultationColposcopieSchema = new mongoose.Schema({
    motif_cc: { type: String,maxlength: 150, default: null }, //liste:  (  Consultation grossesse,  Consultation gynécologique,  Consultation PMA,  Consultation libre,  Coloposcopie,  Echographie pelvienne,  Echo &lt; 11 SA,  Echo 1er trimestre,  Echo 2ème trimestre,  Echo 3ème trimestre, Echo de croissance,  Echo du col,  Echo cardiofoetale,  Consultation grossesse,  Compte-rendu opératoire,  Interrogatoire PMA,  Monitorage PMA,  Consultation gynécologique libre,  Consultation obstétrique libre )
    patient: { type: String, maxlength: 150, dmaxlength: 150,efault: null }, //patient relation
    praticien: { type: String,  default: null }, //praticien relation
    date_cc: { type: Date,  required: true },  
    consultation: { type: String, maxlength: 150, required: true },  //textarea
    conduite: { type: String, maxlength: 150, required: true },  //textarea
    grossesse: { type: String, maxlength: 150, required: true },  //liste
    date_rdv_suivant: { type: Date,  required: true },  
    date_rdv_avant: { type: Date,  required: true },  
    ip_droite: { type: Number,  required: true },  
    ir_droite: { type: Number,  required: true }, 
    ip_gauche: { type: Number,  required: true },  
    ir_gauche: { type: Number,  required: true }, 
    notch_droite: { type: String,maxlength: 150,  required: true }, //liste
    notch_gauche: { type: String,maxlength: 150,  required: true }, //liste
    col_longeur: { type: Number,  required: true }, 
    col_entonnoir: { type: String,maxlength: 150,  required: true }, //liste
    col_orifice_interne: { type: Number,  required: true },
    echo_morpho: { type: String,maxlength: 150,  required: true },//textarea
    echo_T3: { type: String, maxlength: 150, required: true },//textarea
    seins: { type: String, maxlength: 150, required: true },//liste
    examen_sous_speculum: { type: String,  maxlength: 150,required: true },//liste
    leuco: { type: String, maxlength: 150, required: true },//liste
    tv: { type: String, maxlength: 150, required: true },//champs libre
    poids: { type: String, maxlength: 150, required: true },//champs libre
    ta: { type: String, maxlength: 150, required: true },//champs libre
    temperature: { type: String, maxlength: 150, required: true },//champs libre
    alb: { type: String, maxlength: 150, required: true },//champs libre
    gly: { type: String, maxlength: 150, required: true },//champs libre
    commentaire_clinique: { type: String, maxlength: 150, required: true },//champs textarea
    pelvis_maternel: { type: String, maxlength: 150, required: true },//champs libre
    lmc: { type: String, maxlength: 150, required: true },//liste
    

});


const ConsultationColposcopie = mongoose.model('ConsultationColposcopie', ConsultationColposcopieSchema);

module.exports = ConsultationColposcopie;
