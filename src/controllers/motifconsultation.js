

const motifconsultation = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester motifconsultation from controller !!", data: null });
};

exports.motifconsultation = motifconsultation
