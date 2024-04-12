const analysebiologique = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester analysebiologique from controller !!", data: null });
};

exports.analysebiologique = analysebiologique;
