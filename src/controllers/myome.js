

const myome = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester myome from controller !!", data: null });
};

exports.myome = myome
