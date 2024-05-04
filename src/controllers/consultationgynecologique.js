const ConsultationdGynecologueController = async (req, res) => {
  return res
      .status(201)
      .json({ success: true, message: "Tester ConsultationdGynecologueController from controller !!", data: null });
};

exports.ConsultationdGynecologueController =  ConsultationdGynecologueController;
