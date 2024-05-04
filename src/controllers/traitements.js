const traitement = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "traitement test from controller !!", data: null });
};

exports.traitement = traitement;
