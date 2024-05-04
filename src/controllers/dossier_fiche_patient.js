

const dossierfichepatient = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Teste Dossier Patient from controller !!", data: null });
  };
  
  exports.dossierfichepatient = dossierfichepatient
  