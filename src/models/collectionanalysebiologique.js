const mongoose = require("mongoose");

const CollectionAnalusesBiologiquesSchema = new mongoose.Schema({ 
    date_cloture: { type: Date,  default: null },
    compte: { type: String, maxlength: 150, required: true },  //cabinet disponible
    nom: { type: String, maxlength: 50, required: true },  //saisie libre
    analyses: { type: String, maxlength: 150, required: true },  //liste :     (   ACU - Acide Urique,  AGHBS - AgHbs,  Alpha FP - Alpha FP,  AMH - AMH,  AMY - Amylase,  Anti TG - ANTI THYROGLOBULINE,  ASAT - ASAT/ALAT,  BHCG - BHCG Qualitative,  BHCG - BHCG Quantitative,  BTC - BT/C,  BW - BW,  CA125 - CA125,  CA19-9 - CA19-9,  Calcémie - Calcémie,  Ch T - CHT,  CPK - CPK/LDH,  CREAT - Créat,  CRP - CRP,  DPNI - DPNI,  ECBU - ECBU,  EPHb - Electrophorèse de l hémoglobine,  FCV - FCV,  Ferritinémie - Ferritinémie,  FIB - Fibrinémie,  FCU - Frottis Cervico-utérin,  BH - FSH LH PRL,  FT4 - FT4,  GLYC - Glycémie à jeun,  GP75 - GP75,  GSR - Groupe sanguin Rhésus,  HE4 - HE4,  HEMOG - HEMOGLOBINE GLYQUEE,  Hb Glyquée - Hémoglobine Glyquée,  HIV - HIV,  HVC - HVC,  IOS - Ionogramme sanguin,  LIP - Lipase,  HT21 T1 - Marqueurs sériques du 1er trimestre et calcul de risque combiné,  HT21 T2 - Marqueurs sériques du 2ème Trimestre,  NFS - NFS,  OEST - Oestradiolémie,  PEndocervical - Prélèvement endocervical,  PRL - PRL,  PROG - Progestéronémie,  PROT - Protéinurie de 24h,  PV - PV,  RAI - RAI,  RUB - Rubéole,  CHLamydae - SEROLOGIE CHLAMYDAE,  Mycoplasme - SEROLOGIE MYCOPLASME,  SPMG - Spermogramme,  TP - Taux de Prothrombine,  Testostérone - Testostérone,  TG - THYROGLOBULINE,  TXO - Toxoplasmose,  TG - Triglycéride,  TSH - TSH,  UREE - Urée,  Vitamine B12 - Vitamine B12,  Vitamine D - Vitamine D,  BHCG – βHCG)

    });
const CollectionAnalusesBiologiques = mongoose.model('CollectionAnalusesBiologiques', CollectionAnalusesBiologiquesSchema);
module.exports = CollectionAnalusesBiologiques;


