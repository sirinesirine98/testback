const { Schema, model } = require('mongoose');

// Définition du schéma Device
const DeviceSchema = new Schema({
    compte: { type: String, maxlength:128, required: true },
    marque: { type: String, maxlength: 256, required: true },
    modele: { type: String, maxlength: 256, required: true },
    mise_circulation: { type: Date, default: null },
    informations: { type: String, maxlength: 512, default: null },
    reference: { type: String, maxlength: 256, default: null },
    ae_title: { type: String, maxlength: 256, required: true },
    ip: { type: String, maxlength: 14, required: true },
    port: { type: Number, min: 0, required: true }
});

 
 const Device = model('Device', DeviceSchema);

    module.exports = Device;
