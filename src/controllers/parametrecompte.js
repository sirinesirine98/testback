const paramcompte = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester paramétre du compte from controller !!", data: null });
};

exports.paramcompte = paramcompte;
