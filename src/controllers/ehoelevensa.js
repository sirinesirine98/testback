

const echoelevensa = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Teste  echo 11 sa from controller !!", data: null });
};

exports.echoelevensa = echoelevensa
