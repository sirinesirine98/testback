

const courrier = async (req, res) => {
  return res
    .status(201)
    .json({ success: true, message: "Hello SouSou from controller !!", data: null });
};

exports.courrier = courrier
