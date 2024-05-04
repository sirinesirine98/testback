

const motifrdv = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester motifrdv from controller !!", data: null });
};

exports.motifrdv = motifrdv
