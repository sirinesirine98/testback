const consultationechocroissance = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester consultationechocroissance from controller !!", data: null });
};

exports.consultationechocroissance =  consultationechocroissance;
