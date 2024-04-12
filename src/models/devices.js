const { Schema, model } = require('mongoose');

// Définition du schéma Device
const DeviceSchema = new Schema({
    compte: { type: Schema.Types.ObjectId, ref: 'Compte', required: true },
    marque: { type: String, maxlength: 256, required: true },
    modele: { type: String, maxlength: 256, required: true },
    mise_circulation: { type: Date, default: null },
    informations: { type: String, maxlength: 512, default: null },
    reference: { type: String, maxlength: 256, default: null },
    ae_title: { type: String, maxlength: 256, required: true },
    ip: { type: String, maxlength: 14, required: true },
    port: { type: Number, min: 0, required: true }
}, { timestamps: true });

// Définition de la méthode pour afficher le Device
DeviceSchema.methods.toString = function () {
    return `${this.marque} - ${this.modele}`;
};

// Définition du modèle Device
const Device = model('Device', DeviceSchema);

// Export du modèle
module.exports = Device;
