const formuleconsultation = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester formuleconsultation from controller !!", data: null });
};

exports.formuleconsultation = formuleconsultation;
