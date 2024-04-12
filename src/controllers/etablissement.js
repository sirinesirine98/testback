const etablissement = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester Etablissement from controller !!", data: null });
};

exports.etablissement =  etablissement;
