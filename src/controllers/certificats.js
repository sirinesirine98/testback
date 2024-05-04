const certificats = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester Certificats from controller !!", data: null });
};

exports.certificats =  certificats;
