const antecedents = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester Antecedents from controller !!", data: null });
};

exports.antecedents =  antecedents;