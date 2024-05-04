const echot1 = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester echo T1 from controller !!", data: null });
};

exports.echot1 =  echot1;
