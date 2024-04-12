

const suivitraitementpma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester suivitraitementpma from controller !!", data: null });
};

exports.suivitraitementpma = suivitraitementpma
