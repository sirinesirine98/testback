

const lignereglements = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester lignereglements from controller !!", data: null });
};

exports.lignereglements = lignereglements
