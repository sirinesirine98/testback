

const mesurespatient = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester mesurespatient from controller !!", data: null });
};

exports.mesurespatient = mesurespatient
