const categorie_antecedent = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester categorie antecedent from controller !!", data: null });
};

exports.categorie_antecedent =  categorie_antecedent;
