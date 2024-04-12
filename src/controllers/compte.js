const compte = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester Compte from controller !!", data: null });
};

exports.compte = compte;
