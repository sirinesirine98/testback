

const srconsultation = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester srconsultation from controller !!", data: null });
};

exports.srconsultation = srconsultation
