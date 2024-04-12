const traitementpma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "traitementpma test from controller !!", data: null });
};

exports.traitementpma = traitementpma;
