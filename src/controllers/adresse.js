const adresse = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester Adresse from controller !!", data: null });
};

exports.adresse = adresse;
