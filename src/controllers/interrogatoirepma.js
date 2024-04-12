

const interrogatoirepma = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester interrogatoirepma from controller !!", data: null });
};

exports.interrogatoirepma = interrogatoirepma
