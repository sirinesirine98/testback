const echot3 = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester echo T3 from controller !!", data: null });
};

exports.echot3 =  echot3;
