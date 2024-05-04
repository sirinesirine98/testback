const absencemedecin = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester absencemedecin from controller !!", data: null });
};

exports.absencemedecin = absencemedecin;
