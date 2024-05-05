const AntecedentObstetrique = require("../models/antecedentsobstetriques");

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
        sous_categorie,
patient,
text,
date,
grossesse_pat,
grossesse,
grossesse_issue,
analgesie,
indication,
nbfoetus,
date_accouchement,
terme1,
sexe1,
prenom1,
poids_naissance1,
etat_sante1,
allaitement1,
t21_1,
terme2,
sexe2,
prenom2,
poids_naissance2,
etat_sante2,
allaitement2,
t21_2,
terme3,
sexe3,
prenom3,
poids_naissance3,
etat_sante3,
allaitement3,
t21_3,
perine,
suite_couche_type,
suite_couche_details,
atcd_surligner,
evacuation_grossesse,
lieu_accouchement_principale,
lieu_accouchement_libre,
honoraire,
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
    existData.sous_categorie=sous_categorie;
    existData.patient=patient;
    existData.text=text;
    existData.date=date;
    existData.grossesse_pat=grossesse_pat;
    existData.grossesse=grossesse;
    existData.grossesse_issue=grossesse_issue;
    existData.analgesie=analgesie;
    existData.indication=indication;
    existData.nbfoetus=nbfoetus;
    existData.date_accouchement=date_accouchement;
    existData.terme1=terme1;
    existData.sexe1=sexe1;
    existData.prenom1=prenom1;
    existData.poids_naissance1=poids_naissance1;
    existData.etat_sante1=etat_sante1;
    existData.allaitement1=allaitement1;
    existData.t21_1=t21_1;
    existData.terme2=terme2;
    existData.sexe2=sexe2;
    existData.prenom2=prenom2;
    existData.poids_naissance2=poids_naissance2;
    existData.etat_sante2=etat_sante2;
    existData.allaitement2=allaitement2;
    existData.t21_2=t21_2;
    existData.terme3=terme3;
    existData.sexe3=sexe3;
    existData.prenom3=prenom3;
    existData.poids_naissance3=poids_naissance3;
    existData.etat_sante3=etat_sante3;
    existData.allaitement3=allaitement3;
    existData.t21_3=t21_3;
    existData.perine=perine;
    existData.suite_couche_type=suite_couche_type;
    existData.suite_couche_details=suite_couche_details;
    existData.atcd_surligner=atcd_surligner;
    existData.evacuation_grossesse=evacuation_grossesse;
    existData.lieu_accouchement_principale=lieu_accouchement_principale;
    existData.lieu_accouchement_libre=lieu_accouchement_libre;
    existData.honoraire=honoraire;


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