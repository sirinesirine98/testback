

const foetus = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Teste données foetus from controller !!", data: null });
  };
  
  exports.foetus = foetus
  