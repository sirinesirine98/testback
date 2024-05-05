const ConsultationGynecologique = require("../models/consultationgynecologique");

const GetAllData = async (req, res) => {
    let AllData;
    try {
        AllData = await Adresse.find();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    return res.status(200).json({
        success: true,
        message: "data was extracted successfuly",
        data: AllData,
    });
};

const FindDataById = async (req, res) => {
    const { id } = req.params;

    let existData;
    try {
        existData = await Adresse.findById(id);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    if (!existData) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't found",
            data: null,
        });
    }

    return res.status(200).json({
        success: true,
        message: "data was found successfuly",
        data: existData,
    });
};

const AddData = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't sent",
            data: null,
        });
    }

    //   console.log(req.body);



    const newData = new Adresse(req.body);
    try {
        await newData.save();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    return res.status(201).json({
        success: true,
        message: "data was created successfuly",
        data: newData,
    });
};

const UpdateData = async (req, res) => {
    const { id } = req.params;
    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't sent",
            data: null,
        });
    }
    const {
      nom_conjoint,
      prenom_conjoint,
      dn_conjoint,
      tel_conjoint,
      gs_conjoint,
      consanguinite_conjoint,
      etat_sante_conjoint,
      profession_conjoint,
      date_marriage,
      date_consu_gyn,
      motif_cons_gyn,
      patient,
      praticien_cons_gyn,
      conclusion_cons_gyn,
      conduite_cons_gyn,
      titre_echo_pelvienne_cons_gyn,
      pos_uterus_cons_gyn,
      lateralisation__cons_gyn,
      longeur_cons_gyn,
      largeur_cons_gyn,
      hauteur_cons_gyn,
      longeur_total_cons_gyn,
      volume_uterin_cons_gyn,
      volume_uterin_comment_cons_gyn,
      asymetrie_cons_gyn,
      paroi_anterieur_cons_gyn,
      paroi_posterieur_cons_gyn,
      mobilite_cons_gyn,
      structure_cons_gyn,
      commentaire_myometre_cons_gyn,
      cavite_cons_gyn,
      malformation_cons_gyn,
      largeur_interostiale_cons_gyn,
      ligne_cavitaire_cons_gyn,
      hysterometrie_cons_gyn,
      adenomyse_cons_gyn,
      adenomyse_conclusion_cons_gyn,
      type_dispositif_cons_gyn,
      localisation_dispotifi_cons_gyn,
      anomalie_cons_gyn,
      dispotif_tubaire_cons_gyn,
      endometre_echogenicite_cons_gyn,
      endometre_epaisseur_cons_gyn,
      col_longeur_cons_gyn,
      col_aspect_cons_gyn,
      col_vascularisation_cons_gyn,
      commentaire_col_cons_gyn,
      ovaire_gauche_visibilite_cons_gyn,
      ovaire_gauche_aspect_cons_gyn,
      ovaire_gauche_longeur_cons_gyn,
      ovaire_gauche_largeur_cons_gyn,
      ovaire_gauche_hauteur_cons_gyn,
      ovaire_gauche_volume_cons_gyn,
      ovaire_gauche_mobilite_cons_gyn,
      ovaire_gauche_accessibilte_cons_gyn,
      ovaire_gauche_follicules_cons_gyn,
      ovaire_gauche_follicules_list_cons_gyn,
      ovaire_gauche_commentaire_cons_gyn,
      ovaire_droite_visibilite_cons_gyn,
      ovaire_droite_aspect_cons_gyn,
      ovaire_droite_longeur_cons_gyn,
      ovaire_droite_largeur_cons_gyn,
      ovaire_droite_hauteur_cons_gyn,
      ovaire_droite_volume_cons_gyn,
      ovaire_droite_mobilite_cons_gyn,
      ovaire_droite_accessibilte_cons_gyn,
      ovaire_droite_follicules_cons_gyn,
      ovaire_droite_follicules_list_cons_gyn,
      ovaire_droite_commentaire_cons_gyn,
      col_sac_latero_cons_gyn,
   
      motife_consultation_cons_gyn,
      motife_autre_cons_gyn,
      age_menarche_cons_gyn,
      cycle_cons_gyn,
      duree_cons_gyn,
      abondance_cons_gyn,
      douleur_cons_gyn,
      syndrome_cons_gyn,
      ddr_cons_gyn,
      presence_rapport_sexuelle_cons_gyn,
      partenaire_cons_gyn,
      age_premier_rapport_cons_gyn,
      mode_contraception_cons_gyn,
      commentaire_contraception_cons_gyn,
      observance_cons_gyn,
      satisfaction_cons_gyn,
      ths_cons_gyn,
      bouffes_chaleur_cons_gyn,
      incontience_cons_gyn,
      sensation_pesanteur_cons_gyn,
      dyspareunies_cons_gyn,
      commentaire_cons_gyn,
      endometriose_cons_gyn,
      seins_cons_gyn,
      examen_sous_speculum_cons_gyn,
      leuco_cons_gyn,
      tv_cons_gyn,
      poids_cons_gyn,
      ta_cons_gyn,
      temperature_cons_gyn,
      alb_cons_gyn,
      gly_cons_gyn,
      commentaire_clinique_cons_gyn,
      examens_cons_gyn,
      traitements_cons_gyn,
      observations_cons_gyn,
      effets_indesirables_cons_gyn,
      signes_cliniques_cons_gyn,
      prochaine_consultation_date_cons_gyn,
    } = req.body;
    let existData;
    try {
        existData = await Adresse.findById(id);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    if (!existData) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't found",
            data: null,
        });
    }
     
    existData.nom_conjoint=nom_conjoint;
    existData.prenom_conjoint=prenom_conjoint;
    existData.dn_conjoint=dn_conjoint;
    existData.tel_conjoint=tel_conjoint;
    existData.gs_conjoint=gs_conjoint;
    existData.consanguinite_conjoint=consanguinite_conjoint;
    existData.etat_sante_conjoint=etat_sante_conjoint;
    existData.profession_conjoint=profession_conjoint;
    existData.date_marriage=date_marriage;
    existData.date_consu_gyn=date_consu_gyn;
    existData.motif_cons_gyn=motif_cons_gyn;
    existData.patient=patient;
    existData.praticien_cons_gyn=praticien_cons_gyn;
    existData.conclusion_cons_gyn=conclusion_cons_gyn;
    existData.conduite_cons_gyn=conduite_cons_gyn;
    existData.titre_echo_pelvienne_cons_gyn=titre_echo_pelvienne_cons_gyn;
    existData.pos_uterus_cons_gyn=pos_uterus_cons_gyn;
    existData.lateralisation__cons_gyn=lateralisation__cons_gyn;
    existData.longeur_cons_gyn=longeur_cons_gyn;
    existData.largeur_cons_gyn=largeur_cons_gyn;
    existData.hauteur_cons_gyn=hauteur_cons_gyn;
    existData.longeur_total_cons_gyn=longeur_total_cons_gyn;
    existData.volume_uterin_cons_gyn=volume_uterin_cons_gyn;
    existData.volume_uterin_comment_cons_gyn=volume_uterin_comment_cons_gyn;
    existData.asymetrie_cons_gyn=asymetrie_cons_gyn;
    existData.paroi_anterieur_cons_gyn=paroi_anterieur_cons_gyn;
    existData.paroi_posterieur_cons_gyn=paroi_posterieur_cons_gyn;
    existData.mobilite_cons_gyn=mobilite_cons_gyn;
    existData.structure_cons_gyn=structure_cons_gyn;
    existData.commentaire_myometre_cons_gyn=commentaire_myometre_cons_gyn;
    existData.cavite_cons_gyn=cavite_cons_gyn;
    existData.malformation_cons_gyn=malformation_cons_gyn;
    existData.largeur_interostiale_cons_gyn=largeur_interostiale_cons_gyn;
    existData.ligne_cavitaire_cons_gyn=ligne_cavitaire_cons_gyn;
    existData.hysterometrie_cons_gyn=hysterometrie_cons_gyn;
    existData.adenomyse_cons_gyn=adenomyse_cons_gyn;
    existData.adenomyse_conclusion_cons_gyn=adenomyse_conclusion_cons_gyn;
    existData.type_dispositif_cons_gyn=type_dispositif_cons_gyn;
    existData.localisation_dispotifi_cons_gyn=localisation_dispotifi_cons_gyn;
    existData.anomalie_cons_gyn=anomalie_cons_gyn;
    existData.dispotif_tubaire_cons_gyn=dispotif_tubaire_cons_gyn;
    existData.endometre_echogenicite_cons_gyn=endometre_echogenicite_cons_gyn;
    existData.endometre_epaisseur_cons_gyn=endometre_epaisseur_cons_gyn;
    existData.col_longeur_cons_gyn=col_longeur_cons_gyn;
    existData.col_aspect_cons_gyn=col_aspect_cons_gyn;
    existData.col_vascularisation_cons_gyn=col_vascularisation_cons_gyn;
    existData.commentaire_col_cons_gyn=commentaire_col_cons_gyn;
    existData.ovaire_gauche_visibilite_cons_gyn=ovaire_gauche_visibilite_cons_gyn;
    existData.ovaire_gauche_aspect_cons_gyn=ovaire_gauche_aspect_cons_gyn;
    existData.ovaire_gauche_longeur_cons_gyn=ovaire_gauche_longeur_cons_gyn;
    existData.ovaire_gauche_largeur_cons_gyn=ovaire_gauche_largeur_cons_gyn;
    existData.ovaire_gauche_hauteur_cons_gyn=ovaire_gauche_hauteur_cons_gyn;
    existData.ovaire_gauche_volume_cons_gyn=ovaire_gauche_volume_cons_gyn;
    existData.ovaire_gauche_mobilite_cons_gyn=ovaire_gauche_mobilite_cons_gyn;
    existData.ovaire_gauche_accessibilte_cons_gyn=ovaire_gauche_accessibilte_cons_gyn;
    existData.ovaire_gauche_follicules_cons_gyn=ovaire_gauche_follicules_cons_gyn;
    existData.ovaire_gauche_follicules_list_cons_gyn=ovaire_gauche_follicules_list_cons_gyn;
    existData.ovaire_gauche_commentaire_cons_gyn=ovaire_gauche_commentaire_cons_gyn;
    existData.ovaire_droite_visibilite_cons_gyn=ovaire_droite_visibilite_cons_gyn;
    existData.ovaire_droite_aspect_cons_gyn=ovaire_droite_aspect_cons_gyn;
    existData.ovaire_droite_longeur_cons_gyn=ovaire_droite_longeur_cons_gyn;
    existData.ovaire_droite_largeur_cons_gyn=ovaire_droite_largeur_cons_gyn;
    existData.ovaire_droite_hauteur_cons_gyn=ovaire_droite_hauteur_cons_gyn;
    existData.ovaire_droite_volume_cons_gyn=ovaire_droite_volume_cons_gyn;
    existData.ovaire_droite_mobilite_cons_gyn=ovaire_droite_mobilite_cons_gyn;
    existData.ovaire_droite_accessibilte_cons_gyn=ovaire_droite_accessibilte_cons_gyn;
    existData.ovaire_droite_follicules_cons_gyn=ovaire_droite_follicules_cons_gyn;
    existData.ovaire_droite_follicules_list_cons_gyn=ovaire_droite_follicules_list_cons_gyn;
    existData.ovaire_droite_commentaire_cons_gyn=ovaire_droite_commentaire_cons_gyn;
    existData.col_sac_latero_cons_gyn=col_sac_latero_cons_gyn;
    existData.motife_consultation_cons_gyn=motife_consultation_cons_gyn;
    existData.motife_autre_cons_gyn=motife_autre_cons_gyn;
    existData.age_menarche_cons_gyn=age_menarche_cons_gyn;
    existData.cycle_cons_gyn=cycle_cons_gyn;
    existData.duree_cons_gyn=duree_cons_gyn;
    existData.abondance_cons_gyn=abondance_cons_gyn;
    existData.douleur_cons_gyn=douleur_cons_gyn;
    existData.syndrome_cons_gyn=syndrome_cons_gyn;
    existData.ddr_cons_gyn=ddr_cons_gyn;
    existData.presence_rapport_sexuelle_cons_gyn=presence_rapport_sexuelle_cons_gyn;
    existData.partenaire_cons_gyn=partenaire_cons_gyn;
    existData.age_premier_rapport_cons_gyn=age_premier_rapport_cons_gyn;
    existData.mode_contraception_cons_gyn=mode_contraception_cons_gyn;
    existData.commentaire_contraception_cons_gyn=commentaire_contraception_cons_gyn;
    existData.observance_cons_gyn=observance_cons_gyn;
    existData.satisfaction_cons_gyn=satisfaction_cons_gyn;
    existData.ths_cons_gyn=ths_cons_gyn;
    existData.bouffes_chaleur_cons_gyn=bouffes_chaleur_cons_gyn;
    existData.incontience_cons_gyn=incontience_cons_gyn;
    existData.sensation_pesanteur_cons_gyn=sensation_pesanteur_cons_gyn;
    existData.dyspareunies_cons_gyn=dyspareunies_cons_gyn;
    existData.commentaire_cons_gyn=commentaire_cons_gyn;
    existData.endometriose_cons_gyn=endometriose_cons_gyn;
    existData.seins_cons_gyn=seins_cons_gyn;
    existData.examen_sous_speculum_cons_gyn=examen_sous_speculum_cons_gyn;
    existData.leuco_cons_gyn=leuco_cons_gyn;
    existData.tv_cons_gyn=tv_cons_gyn;
    existData.poids_cons_gyn=poids_cons_gyn;
    existData.ta_cons_gyn=ta_cons_gyn;
    existData.temperature_cons_gyn=temperature_cons_gyn;
    existData.alb_cons_gyn=alb_cons_gyn;
    existData.gly_cons_gyn=gly_cons_gyn;
    existData.commentaire_clinique_cons_gyn=commentaire_clinique_cons_gyn;
    existData.examens_cons_gyn=examens_cons_gyn;
    existData.traitements_cons_gyn=traitements_cons_gyn;
    existData.observations_cons_gyn=observations_cons_gyn;
    existData.effets_indesirables_cons_gyn=effets_indesirables_cons_gyn;
    existData.signes_cliniques_cons_gyn=signes_cliniques_cons_gyn;
    existData.prochaine_consultation_date_cons_gyn=prochaine_consultation_date_cons_gyn;
    

    try {
        await existData.save();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while saving data",
            data: null,
        });
    }

    return res.status(200).json({
        success: true,
        message: "data was updated successfuly",
        data: existData,
    });
};

const DeleteData = async (req, res) => {
    const { id } = req.params;

    let existData;
    try {
        existData = await Adresse.findById(id);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    if (!existData) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't found",
            data: null,
        });
    }

    try {
        await existData.deleteOne();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "somethin went wrong while extracting data",
            data: null,
        });
    }

    return res.status(200).json({
        success: true,
        message: "data was deleted successfuly",
        data: null,
    });
};

exports.GetAllData = GetAllData;
exports.FindDataById = FindDataById;
exports.AddData = AddData;
exports.UpdateData = UpdateData;
exports.DeleteData = DeleteData;