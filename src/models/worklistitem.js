const { Schema, model } = require('mongoose');

// Définition du schéma WorklistItem
const WorklistItemSchema = new Schema({
    consultation: { type: Schema.Types.ObjectId, ref: 'Consultation', required: true },
    device: { type: Schema.Types.ObjectId, ref: 'Device', default: null },
    study_instance_uid: { type: String, maxlength: 256, required: true },
    requested_procedure_description: { type: String, maxlength: 256, default: null },
    requested_procedure_id: { type: String, maxlength: 256, default: null },
    mpps_status: {
        type: String,
        enum: ['PENDING', 'IN PROGRESS', 'COMPLETED', 'DISCONTINUED'],
        default: 'PENDING'
    }
}, { timestamps: true });

// Définition de la méthode pour obtenir le nom du patient
WorklistItemSchema.methods.getPatientName = function() {
    return `${this.consultation.patient.prenom}^${this.consultation.patient.nom}`;
};

// Définition de la méthode pour afficher WorklistItem
WorklistItemSchema.methods.toString = function() {
    return `${this.consultation.date} - ${this.study_instance_uid}`;
};

// Définition du modèle WorklistItem
const WorklistItem = model('WorklistItem', WorklistItemSchema);

// Export du modèle
module.exports = WorklistItem;
