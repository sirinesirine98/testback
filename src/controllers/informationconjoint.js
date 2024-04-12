

const informationconjoint = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester informationconjoint from controller !!", data: null });
};

exports.informationconjoint = informationconjoint
