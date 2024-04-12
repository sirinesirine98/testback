// Définition du schéma CollectionAnalyseBiologique
const CollectionAnalyseBiologiqueSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    nom: { type: String, maxlength: 128, required: true },
    analyses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique' }]
}, { timestamps: true });

// Ajout d'une méthode virtuelle pour récupérer la liste des analyses
CollectionAnalyseBiologiqueSchema.virtual('analyses_list').get(function () {
    return this.analyses.map(analyse => analyse.analysebiologique);
});

// Définition du modèle CollectionAnalyseBiologique
const CollectionAnalyseBiologique = mongoose.model('CollectionAnalyseBiologique', CollectionAnalyseBiologiqueSchema);

// Export du modèle
module.exports = CollectionAnalyseBiologique;
