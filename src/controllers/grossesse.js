

const grossesse = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester Grossesse from controller !!", data: null });
  };
  
  exports.grossesse = grossesse
  