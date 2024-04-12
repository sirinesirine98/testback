

const resanalysebio = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester resanalysebio from controller !!", data: null });
  };
  
  exports.resanalysebio = resanalysebio
  