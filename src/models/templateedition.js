// Définition du schéma TemplateEdition
const TemplateEditionSchema = new mongoose.Schema({
    compte: { type: String , required: true },
    categorie_consultation: { type:String ,  required: true },
    motif_consultation: { type:String ,  default: null },
    libelle: { type: String, maxlength: 256, required: true },
    contenu: { type: String, default: '', required: true }
}, { timestamps: true });
 
// Définition du modèle TemplateEdition
const TemplateEdition = mongoose.model('TemplateEdition', TemplateEditionSchema);

// Export des modèles
module.exports = { TemplateEdition, TemplateEdition };
