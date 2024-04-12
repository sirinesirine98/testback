const mongoose = require("mongoose");

const CompteSchema = new mongoose.Schema({
    raison_sociale: { type: String, required: true, maxlength: 128 },
    adresse: { type: mongoose.Schema.Types.ObjectId, ref: 'Adresse', default: null },
    telephone: { type: String, maxlength: 20, required: true },
    fax: { type: String, maxlength: 20, default: null },
    email: { type: String, maxlength: 254, default: null },
    langue: { type: String, maxlength: 8, default: "fr" },
    responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    categories_consultations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CategorieConsultation' }],
    distribution: {
        type: String,
        enum: ['GYNECOLOGIE', 'GENERALISTE', 'CARDIOLOGIE'],
        default: 'GYNECOLOGIE'
    }
}, { timestamps: true });

CompteSchema.methods.categories = function () {
    return this.categories_consultations.map(cat => cat.toString());
};

CompteSchema.methods.is_gyneco = function () {
    return this.distribution === 'GYNECOLOGIE';
};

CompteSchema.methods.is_general = function () {
    return this.distribution === 'GENERALISTE';
};

CompteSchema.methods.is_cardio = function () {
    return this.distribution === 'CARDIOLOGIE';
};

CompteSchema.methods.product_brand = function () {
    if (this.distribution === 'GYNECOLOGIE' || this.distribution === 'CARDIOLOGIE') {
        return 'Expert Echo';
    }
    if (this.distribution === 'GENERALISTE') {
        return 'Expert Médical';
    }
};

const Compte = mongoose.model('Compte', CompteSchema);

module.exports = Compte;
