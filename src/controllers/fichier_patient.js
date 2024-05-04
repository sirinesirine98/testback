const fichierpatient = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester fichierpatient from controller !!", data: null });
};

exports.fichierpatient = fichierpatient;
