const typeordonnance = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester typeordonnance from controller !!", data: null });
};

exports.typeordonnance = typeordonnance;
