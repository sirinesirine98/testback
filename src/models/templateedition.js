// Définition du schéma TemplateEdition
const TemplateEditionSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    categorie_consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'CategorieConsultation', required: true },
    motif_consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'MotifConsultation', default: null },
    libelle: { type: String, maxlength: 256, required: true },
    contenu: { type: String, default: '', required: true }
}, { timestamps: true });

// Définition du modèle TemplateEdition
const TemplateEdition = mongoose.model('TemplateEdition', TemplateEditionSchema);

// Définition du schéma AlertePatient
const AlertePatientSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    text: { type: String, maxlength: 512, required: true },
    lien: { type: String, maxlength: 512, required: true }
}, { timestamps: true });

// Définition du modèle AlertePatient
const AlertePatient = mongoose.model('AlertePatient', AlertePatientSchema);

// Export des modèles
module.exports = { TemplateEdition, AlertePatient };
