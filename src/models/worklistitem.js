const { Schema, model } = require('mongoose');

// Définition du schéma WorklistItem
const WorklistItemSchema = new Schema({
    consultation: { type: String,  required: true },
    device: { type: String,  default: null },
    study_instance_uid: { type: String, maxlength: 256, required: true },
    requested_procedure_description: { type: String, maxlength: 256, default: null },
    requested_procedure_id: { type: String, maxlength: 256, default: null },
    mpps_status: {type: String  }//['PENDING', 'IN PROGRESS', 'COMPLETED', 'DISCONTINUED']
});

// Définition du modèle WorklistItem
const WorklistItem = model('WorklistItem', WorklistItemSchema);

// Export du modèle
module.exports = WorklistItem;
