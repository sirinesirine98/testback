const phrasiers = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "phrasiers test from controller !!", data: null });
  };
  
  exports.phrasiers= phrasiers;
  