const reglements = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester reglements from controller !!", data: null });
};

exports.reglements = reglements;
