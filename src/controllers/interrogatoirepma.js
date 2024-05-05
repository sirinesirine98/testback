const InterrogatoirePMA = require("../models/interrogatoirepma");

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
        patient,
        praticien,
        text,
        date,
        type_infertilite,
        duree_infertilite,
        duree_infertilite_mois,
        duree_desir_gross,
        gross_nb,
        gross_dt,
        enfants_nb,
        enfants_dt,
        geu_nb,
        geu_dt,
        avort_nb,
        avort_dt,
        technique,
        exam_echo,
        exam_hsg,
        exam_hsc,
        exam_coelioscopie,
        exam_tpc,
        antec_medicaux,
        antec_chirugicaux,
        antec_familiaux,
        antec_tabac,
        antec_alcool,
        sperme_normal,
        sperme_oats_o,
        sperme_oats_a,
        sperme_oats_t,
        sperme_oat_gravite,
        sperme_azoospermie,
        sperme_azoo_gravite,
        sperme_congenalation,
        sperme_congenalation_clinique,
        nb_paillettes,
        rendement,
        echo_testiculaire,
        echo_testiculaire_comment,
        bilan_infect,
        bilan_infect_comment,
        conduite,
 
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
    existData.patient=patient;
    existData.praticien=praticien;
    existData.text=text;
    existData.date=date;
    existData.type_infertilite=type_infertilite;
    existData.duree_infertilite=duree_infertilite;
    existData.duree_infertilite_mois=duree_infertilite_mois;
    existData.duree_desir_gross=duree_desir_gross;
    existData.gross_nb=gross_nb;
    existData.gross_dt=gross_dt;
    existData.enfants_nb=enfants_nb;
    existData.enfants_dt=enfants_dt;
    existData.geu_nb=geu_nb;
    existData.geu_dt=geu_dt;
    existData.avort_nb=avort_nb;
    existData.avort_dt=avort_dt;
    existData.technique=technique;
    existData.exam_echo=exam_echo;
    existData.exam_hsg=exam_hsg;
    existData.exam_hsc=exam_hsc;
    existData.exam_coelioscopie=exam_coelioscopie;
    existData.exam_tpc=exam_tpc;
    existData.antec_medicaux=antec_medicaux;
    existData.antec_chirugicaux=antec_chirugicaux;
    existData.antec_familiaux=antec_familiaux;
    existData.antec_tabac=antec_tabac;
    existData.antec_alcool=antec_alcool;
    existData.sperme_normal=sperme_normal;
    existData.sperme_oats_o=sperme_oats_o;
    existData.sperme_oats_a=sperme_oats_a;
    existData.sperme_oats_t=sperme_oats_t;
    existData.sperme_oat_gravite=sperme_oat_gravite;
    existData.sperme_azoospermie=sperme_azoospermie;
    existData.sperme_azoo_gravite=sperme_azoo_gravite;
    existData.sperme_congenalation=sperme_congenalation;
    existData.sperme_congenalation_clinique=sperme_congenalation_clinique;
    existData.nb_paillettes=nb_paillettes;
    existData.rendement=rendement;
    existData.echo_testiculaire=echo_testiculaire;
    existData.echo_testiculaire_comment=echo_testiculaire_comment;
    existData.bilan_infect=bilan_infect;
    existData.bilan_infect_comment=bilan_infect_comment;
    existData.conduite=conduite;
   
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