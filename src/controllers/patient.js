const patient = async (req, res) => {
  return res
    .status(201)
    .json({ success: true, message: "Patient test from controller !!", data: null });
};

exports.patient= patient;
