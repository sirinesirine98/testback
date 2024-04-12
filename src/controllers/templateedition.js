



const templateedition = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester templateedition from controller !!", data: null });
};

exports.templateedition = templateedition
