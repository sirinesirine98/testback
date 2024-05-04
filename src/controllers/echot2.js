const echot2 = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester echo T2 from controller !!", data: null });
};

exports.echot2 =  echot2;
