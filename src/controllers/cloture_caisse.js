const cloture_caisse = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester cloture_caisse from controller !!", data: null });
};

exports.cloture_caisse =  cloture_caisse;
