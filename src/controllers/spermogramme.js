

const spermogramme = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester spermogramme from controller !!", data: null });
  };
  
  exports.spermogramme = spermogramme
  