

const imageconsultation = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester imageconsultation from controller !!", data: null });
};

exports.imageconsultation = imageconsultation
