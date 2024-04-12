

const constechopelvienne = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Echo pelvienne test !!", data: null });
  };
  
  exports.constechopelvienne = constechopelvienne
  