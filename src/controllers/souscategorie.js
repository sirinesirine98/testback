

const souscategorie = async (req, res) => {
    return res
      .status(201)
      .json({ success: true, message: "Tester souscategorie from controller !!", data: null });
  };
  
  exports.souscategorie = souscategorie
  