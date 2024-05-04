const categorie_consultation = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester categorie consultation from controller !!", data: null });
};

exports.categorie_consultation =  categorie_consultation;
