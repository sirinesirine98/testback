const echo11sa = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester echo 11SA from controller !!", data: null });
};

exports.echo11sa =  echo11sa;
