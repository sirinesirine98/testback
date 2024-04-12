const worklistitem = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester worklistitem from controller !!", data: null });
};

exports.worklistitem = worklistitem;
