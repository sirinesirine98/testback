const mongoose = require("mongoose");

const ConsultationGynecologiqueSchema = new mongoose.Schema({

    nom_conjoint: { type: String, maxlength: 256, default: null },
    prenom_conjoint: { type: String, maxlength: 256, default: null },
    dn_conjoint: { type: Date, default: null },
    tel_conjoint: { type: Number, maxlength: 20, default: null },
    gs_conjoint: { type: String, maxlength: 4, default: null },
    consanguinite_conjoint: { type: String, maxlength: 4, default: null },//( oui / non )
    etat_sante_conjoint: { type: String, maxlength: 128, default: null },
    profession_conjoint: { type: String, maxlength: 128, default: null },
    date_marriage: { type: Date, default: null },
    date_consu_gyn: { type: Date, default: null },
    motif_cons_gyn: { type: String, maxlength: 128, default: null },
    patient: { type: String, maxlength: 128, default: null }, //references
    praticien_cons_gyn: { type: String, maxlength: 128, default: null },
    conclusion_cons_gyn: { type: String, maxlength: 128, default: null },//textarea
    conduite_cons_gyn: { type: String, maxlength: 128, default: null },
    titre_echo_pelvienne_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    pos_uterus_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    lateralisation__cons_gyn: { type: String, maxlength: 128, default: null },//liste
    longeur_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    largeur_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    hauteur_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    longeur_total_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    volume_uterin_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    volume_uterin_comment_cons_gyn: { type: String, maxlength: 128, default: null },//liste
    asymetrie_cons_gyn: { type: String, maxlength: 128, default: null },
    paroi_anterieur_cons_gyn: { type: String, maxlength: 128, default: null },
    paroi_posterieur_cons_gyn: { type: String, maxlength: 128, default: null },
    mobilite_cons_gyn: { type: String, maxlength: 128, default: null },
    structure_cons_gyn: { type: String, maxlength: 128, default: null },
    commentaire_myometre_cons_gyn: { type: String, maxlength: 128, default: null },
    cavite_cons_gyn: { type: String, maxlength: 128, default: null },
    malformation_cons_gyn: { type: String, maxlength: 128, default: null },
    largeur_interostiale_cons_gyn: { type: String, maxlength: 128, default: null },
    ligne_cavitaire_cons_gyn: { type: String, maxlength: 128, default: null },
    hysterometrie_cons_gyn: { type: String, maxlength: 128, default: null },
    adenomyse_cons_gyn: { type: String, maxlength: 128, default: null },
    adenomyse_conclusion_cons_gyn: { type: String, maxlength: 128, default: null },
    type_dispositif_cons_gyn: { type: String, maxlength: 128, default: null },
    localisation_dispotifi_cons_gyn: { type: String, maxlength: 128, default: null },
    anomalie_cons_gyn: { type: String, maxlength: 128, default: null },
    dispotif_tubaire_cons_gyn: { type: String, maxlength: 128, default: null }, //( oui / non )
    endometre_echogenicite_cons_gyn: { type: String, maxlength: 128, default: null },
    endometre_epaisseur_cons_gyn: { type: String, maxlength: 128, default: null },
    col_longeur_cons_gyn: { type: String, maxlength: 128, default: null },
    col_aspect_cons_gyn: { type: String, maxlength: 128, default: null },
    col_vascularisation_cons_gyn: { type: String, maxlength: 128, default: null },
    commentaire_col_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_visibilite_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_aspect_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_longeur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_largeur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_hauteur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_volume_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_mobilite_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_accessibilte_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_follicules_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_follicules_list_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_gauche_commentaire_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_visibilite_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_aspect_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_longeur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_largeur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_hauteur_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_volume_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_mobilite_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_accessibilte_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_follicules_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_follicules_list_cons_gyn: { type: String, maxlength: 128, default: null },
    ovaire_droite_commentaire_cons_gyn: { type: String, maxlength: 128, default: null },
    col_sac_latero_cons_gyn: { type: String, maxlength: 128, default: null },
    motife_consultation_cons_gyn: { type: String, maxlength: 128, default: null },
    motife_autre_cons_gyn: { type: String, maxlength: 128, default: null },
    age_menarche_cons_gyn: { type: String, maxlength: 128, default: null },
    cycle_cons_gyn: { type: String, maxlength: 128, default: null },
    duree_cons_gyn: { type: String, maxlength: 128, default: null },
    abondance_cons_gyn: { type: String, maxlength: 128, default: null },
    douleur_cons_gyn: { type: String, maxlength: 128, default: null },
    syndrome_cons_gyn: { type: String, maxlength: 128, default: null },
    ddr_cons_gyn: { type: String, maxlength: 128, default: null },
    presence_rapport_sexuelle_cons_gyn: { type: String, maxlength: 128, default: null },
    partenaire_cons_gyn: { type: String, maxlength: 128, default: null },
    age_premier_rapport_cons_gyn: { type: String, maxlength: 128, default: null },
    mode_contraception_cons_gyn: { type: String, maxlength: 128, default: null },
    commentaire_contraception_cons_gyn: { type: String, maxlength: 128, default: null },
    observance_cons_gyn: { type: String, maxlength: 128, default: null },
    satisfaction_cons_gyn: { type: String, maxlength: 128, default: null },
    ths_cons_gyn: { type: String, maxlength: 128, default: null },
    bouffes_chaleur_cons_gyn: { type: String, maxlength: 128, default: null },
    incontience_cons_gyn: { type: String, maxlength: 128, default: null },
    sensation_pesanteur_cons_gyn: { type: String, maxlength: 128, default: null },
    dyspareunies_cons_gyn: { type: String, maxlength: 128, default: null },
    commentaire_cons_gyn: { type: String, maxlength: 128, default: null },
    endometriose_cons_gyn: { type: String, maxlength: 128, default: null },
    seins_cons_gyn: { type: String, maxlength: 128, default: null },
    examen_sous_speculum_cons_gyn: { type: String, maxlength: 128, default: null },
    leuco_cons_gyn: { type: String, maxlength: 128, default: null },
    tv_cons_gyn: { type: String, maxlength: 128, default: null },
    poids_cons_gyn: { type: String, maxlength: 128, default: null },
    ta_cons_gyn: { type: String, maxlength: 128, default: null },
    temperature_cons_gyn: { type: String, maxlength: 128, default: null },
    alb_cons_gyn: { type: String, maxlength: 128, default: null },
    gly_cons_gyn: { type: String, maxlength: 128, default: null },
    commentaire_clinique_cons_gyn: { type: String, maxlength: 128, default: null },
    examens_cons_gyn: { type: String, maxlength: 128, default: null },
    traitements_cons_gyn: { type: String, maxlength: 128, default: null },
    observations_cons_gyn: { type: String, maxlength: 128, default: null },
    effets_indesirables_cons_gyn: { type: String, maxlength: 128, default: null },
    signes_cliniques_cons_gyn: { type: String, maxlength: 128, default: null },
    prochaine_consultation_date_cons_gyn: { type: String, maxlength: 128, default: null },
    prochaine_consultation_approx_cons_gyn: { type: String, maxlength: 128, default: null },

});

const ConsultationGynecologique = mongoose.model('ConsultationGynecologique', ConsultationGynecologiqueSchema);

module.exports = ConsultationGynecologique;

