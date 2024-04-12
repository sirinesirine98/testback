

const concultationgynecol = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Consultation gynecologique !!", data: null });
  };
  
  exports.concultationgynecol = concultationgynecol
  