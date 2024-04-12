const bilanendocrinienpma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester bilanendocrinienpma from controller !!", data: null });
};

exports.bilanendocrinienpma = bilanendocrinienpma;
