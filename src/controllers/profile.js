const profile = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester Profile from controller !!", data: null });
};

exports.profile = profile;
