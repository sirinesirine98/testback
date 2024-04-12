

const concultationobs = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Consultation obs !!", data: null });
  };
  
  exports.concultationobs = concultationobs
  