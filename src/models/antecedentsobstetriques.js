const mongoose = require("mongoose");

const AntecedentObstetriqueSchema = new mongoose.Schema({
    sous_categorie: { type: String, maxlength: 128, required: true }, // ( Antécédents familiaux, Antécédents médico-chirurgicaux, Antécédents gynécologiques, Accouchement du siège, Accouchement voie basse, Accouchement voie basse instrumentale , Césarienne, FCS, FCT,GEU,Grossesse molaire,IMG,ISG,IVG,MFIU,FCV,Mammographie,Echo Mammaire,Non définie )
    patient: { type: String, maxlength: 128, required: true }, //Foreign key
    text: { type: String, maxlength: 128, required: true },// textarea
    date: { type: Date, default: null },
    grossesse_pat: { type: String, maxlength: 128, required: true },
    grossesse: { type: String, maxlength: 128, required: true },
    grossesse_issue: { type: String, maxlength: 128, required: true },
    analgesie: { type: String, maxlength: 128, required: true },
    indication: { type: String, maxlength: 128, required: true },
    nbfoetus: { type: Number, default: null },
    date_accouchement: { type: Date, default: null },
    terme1: { type: String, maxlength: 50, required: true },
    sexe1: { type: String, maxlength: 50, required: true }, // ( Féminin, masculin , Non définis ) 
    prenom1: { type: String, maxlength: 50, required: true },
    poids_naissance1: { type: String, maxlength: 50, required: true },
    etat_sante1: { type: String, maxlength: 50, required: true },
    allaitement1: { type: String, maxlength: 50, required: true }, //( Oui, Non )
    t21_1: { type: String, maxlength: 50, required: true },
    terme2: { type: String, maxlength: 50, required: true },
    sexe2: { type: String, maxlength: 50, required: true }, // ( Féminin, masculin , Non définis ) 
    prenom2: { type: String, maxlength: 50, required: true },
    poids_naissance2: { type: String, maxlength: 50, required: true },
    etat_sante2: { type: String, maxlength: 50, required: true },
    allaitement2: { type: String, maxlength: 50, required: true }, //( Oui, Non )
    t21_2: { type: String, maxlength: 50, required: true },
    terme3: { type: String, maxlength: 50, required: true },
    sexe3: { type: String, maxlength: 50, required: true }, // ( Féminin, masculin , Non définis ) 
    prenom3: { type: String, maxlength: 50, required: true },
    poids_naissance3: { type: String, maxlength: 50, required: true },
    etat_sante3: { type: String, maxlength: 50, required: true },
    allaitement3: { type: String, maxlength: 50, required: true }, //( Oui, Non )
    t21_3: { type: String, maxlength: 50, required: true },
    perine: { type: String, maxlength: 150, required: true },
    suite_couche_type: { type: String, maxlength: 150, required: true }, //liste
    suite_couche_details: { type: String, maxlength: 150, required: true }, //liste
    atcd_surligner: { type: String, maxlength: 150, required: true }, //texatrea
    evacuation_grossesse: { type: String, maxlength: 150, required: true }, //liste
    lieu_accouchement_principale: { type: String, maxlength: 150, required: true }, //( Hopital, clinqiue , autre )
    lieu_accouchement_libre: { type: String, maxlength: 150, required: true }, // champs libre
    honoraire: { type: String, maxlength: 150, required: true }, // champs libre


});


module.exports = mongoose.model('AntecedentObstetrique', AntecedentObstetriqueSchema);
