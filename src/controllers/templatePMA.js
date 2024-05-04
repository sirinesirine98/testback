const dtemplatePMA = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "dtemplatePMA test from controller !!", data: null });
};

exports.dtemplatePMA = dtemplatePMA;
