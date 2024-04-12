

const tentativehistoriquepma = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester tentativehistoriquepma from controller !!", data: null });
  };
  
  exports.tentativehistoriquepma = tentativehistoriquepma
  