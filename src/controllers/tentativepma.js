const tentativepma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tentativepma test from controller !!", data: null });
};

exports.tentativepma = tentativepma;
