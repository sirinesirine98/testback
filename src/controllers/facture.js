const facture = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester facture from controller !!", data: null });
};

exports.facture = facture;
