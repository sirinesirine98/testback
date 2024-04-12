const praticien = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester Medecin from controller !!", data: null });
};

exports.praticien = praticien;
