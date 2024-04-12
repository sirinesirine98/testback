

const devices = async (req, res) => {
  return res
    .status(201)
    .json({ success: true, message: "Tester devices from controller !!", data: null });
};

exports.devices = devices
