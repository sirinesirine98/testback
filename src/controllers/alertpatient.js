const alertpatient = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "tester alertpatient from controller !!", data: null });
};

exports.alertpatient = alertpatient;
