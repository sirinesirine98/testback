

const constcolposcopie = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Colposcopie test !!", data: null });
};

exports.constcolposcopie = constcolposcopie
