const mongoose = require("mongoose");

const AdresseSchema = new mongoose.Schema({
    numero: { type: Number, default: null },
    rue: { type: String, maxlength: 128, default: null },
    cite: { type: String, maxlength: 128, default: null },
    ville: { type: String, maxlength: 128, default: null },
    cp: { type: Number, default: null },
    gouvernorat: { type: String, maxlength: 128, default: null },
    pays: { type: String, required: true, maxlength: 128 }
}, { timestamps: true });

AdresseSchema.methods.toString = function () {
    let result = "";
    if (this.numero) {
        result += this.numero + " ";
    }
    if (this.rue) {
        result += "rue " + this.rue + ", ";
    }
    if (this.ville) {
        result += this.ville;
    }
    if (this.gouvernorat) {
        result += ", " + this.gouvernorat;
    }
    return result;
};

AdresseSchema.methods.naturalKey = function () {
    return this.ville;
};

const Adresse = mongoose.model('Adresse', AdresseSchema);

module.exports = Adresse;
