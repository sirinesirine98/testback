const antecedentsobstetriques = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester antecedentsobstetriques from controller !!", data: null });
};

exports.antecedentsobstetriques =  antecedentsobstetriques;
