

const motifabsence = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester motifabsence from controller !!", data: null });
};

exports.motifabsence = motifabsence
