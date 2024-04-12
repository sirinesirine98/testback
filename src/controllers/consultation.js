

const consultation = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester consultation from controller !!", data: null });
  };
  
  exports.consultation = consultation
  