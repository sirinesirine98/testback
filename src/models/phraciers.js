const mongoose = require("mongoose");

const PhrasierSchema = new mongoose.Schema({
     Libelle: { type: String, maxlength:128  },
     text: { type: String, maxlength:128  },
     Categorie: { type: String, maxlength:128  },//liste

});

module.exports = mongoose.model('Phrasier', PhrasierSchema);
