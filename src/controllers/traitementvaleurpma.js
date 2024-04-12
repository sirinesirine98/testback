const traitementvaleurpma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester traitementvaleurpma from controller !!", data: null });
};

exports.traitementvaleurpma = traitementvaleurpma;
