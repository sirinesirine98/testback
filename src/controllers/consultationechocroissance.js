const ConsultationEchoCroissance = require("../models/consultationechocroissance");

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
      motif_cc,
      patient,
      praticien,
      date_cc,
      consultation,
      conduite,
      grossesse,
      date_rdv_suivant,
      date_rdv_avant,
      ip_droite,
      ir_droite,
      ip_gauche,
      ir_gauche,
      notch_droite,
      notch_gauche,
      col_longeur,
      col_entonnoir,
      col_orifice_interne,
      echo_morpho,
      echo_T3,
      seins,
      examen_sous_speculum,
      leuco,
      tv,
      poids,
      ta,
      temperature,
      alb,
      gly,
      commentaire_clinique,
      pelvis_maternel,
      lmc,
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
     
    existData.motif_cc=motif_cc;
    existData.patient=patient;
    existData.praticien=praticien;
    existData.date_cc=date_cc;
    existData.consultation=consultation;
    existData.conduite=conduite;
    existData.grossesse=grossesse;
    existData.date_rdv_suivant=date_rdv_suivant;
    existData.date_rdv_avant=date_rdv_avant;
    existData.ip_droite=ip_droite;
    existData.ir_droite=ir_droite;
    existData.ip_gauche=ip_gauche;
    existData.ir_gauche=ir_gauche;
    existData.notch_droite=notch_droite;
    existData.notch_gauche=notch_gauche;
    existData.col_longeur=col_longeur;
    existData.col_entonnoir=col_entonnoir;
    existData.col_orifice_interne=col_orifice_interne;
    existData.echo_morpho=echo_morpho;
    existData.echo_T3=echo_T3;
    existData.seins=seins;
    existData.examen_sous_speculum=examen_sous_speculum;
    existData.leuco=leuco;
    existData.tv=tv;
    existData.poids=poids;
    existData.ta=ta;
    existData.temperature=temperature;
    existData.alb=alb;
    existData.gly=gly;
    existData.commentaire_clinique=commentaire_clinique;
    existData.pelvis_maternel=pelvis_maternel;
    existData.lmc=lmc;

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