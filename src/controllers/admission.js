const admission = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester admission from controller !!", data: null });
};

exports.admission = admission;
