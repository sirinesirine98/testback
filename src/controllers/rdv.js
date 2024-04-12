const Rdv = require('../models/rdv');

const getRdv = async (req, res) => {
    try {
        const rdvs = await Rdv.find();
        return res.status(200).json({ success: true, data: rdvs });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Erreur serveur' });
    }
};


exports.getRdv = getRdv;




