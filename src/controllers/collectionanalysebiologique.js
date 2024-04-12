const collectionanalysebiologique = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester collectionanalysebiologique from controller !!", data: null });
};

exports.collectionanalysebiologique = collectionanalysebiologique;
    