const bordoreau = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester bordoreau from controller !!", data: null });
};

exports.bordoreau =  bordoreau;
