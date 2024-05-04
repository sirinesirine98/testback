const programmeoperatoire = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester programmeoperatoire from controller !!", data: null });
};

exports.programmeoperatoire = programmeoperatoire;
